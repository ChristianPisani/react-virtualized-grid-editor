import { FixedSizeGrid, FixedSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import {
  CSSProperties,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react'
import { DndContext, DragOverlay } from '@dnd-kit/core'
import { Draggable } from './components/draggable.tsx'
import { Droppable } from './components/droppable.tsx'
import { GridCell } from './components/grid-cell.tsx'
import { GridNote, GridNoteDragOverlay } from './components/grid-note.tsx'
import { useGridStore } from './store/grid-store.ts'
import { restrictToFirstScrollableAncestor } from '@dnd-kit/modifiers'
import { createPortal } from 'react-dom'
import { NotesGrid } from './components/notes-grid.tsx'

function App() {
  const columnCount = 1000
  const rowCount = 500

  const [tileSize, setTileSize] = useState(50)

  const moveNote = useGridStore(state => state.moveNote)
  const setDraggingId = useGridStore(state => state.setDraggingId)

  const headerRef = useRef<FixedSizeList>(null)

  const handleGridScroll = useCallback(
    ({ scrollLeft, scrollTop }: { scrollLeft: number; scrollTop: number }) => {
      headerRef.current?.scrollTo(scrollLeft)
      document.body.style.setProperty(
        '--scroll-top',
        `${Math.round(scrollTop)}px`
      )
      document.body.style.setProperty(
        '--scroll-left',
        `${Math.round(scrollLeft)}px`
      )
    },
    []
  )

  const Cell = ({
    rowIndex,
    columnIndex,
    style,
  }: {
    columnIndex: number
    rowIndex: number
    style: CSSProperties
  }) => {
    return (
      <div style={style}>
        <Droppable
          id={`droppable_grid_cell_${columnIndex}_${rowIndex}`}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
        >
          <GridCell />
        </Droppable>
      </div>
    )
  }

  const HeaderCell = ({
    index,
    style,
  }: {
    index: number
    style: CSSProperties
  }) => (
    <div className={`grid-header-cell`} style={style}>
      {/* Render one extra to compensate for scrollbar, but should be hidden */}
      {index < columnCount ? index : null}
    </div>
  )

  const handleDragStart = ({ active }) => {
    setDraggingId(active.id)
  }

  const handleDragEnd = ({ over }) => {
    const overColumnIndex = over.data.current.columnIndex
    const overRowIndex = over.data.current.rowIndex

    const draggingId = useGridStore.getState().draggingId

    const notes = useGridStore.getState().notes
    const note = notes.find(note => note.id === draggingId)

    setDraggingId(undefined)

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    note && moveNote(note.id, overColumnIndex, overRowIndex)
  }

  return (
    <div className={'container'}>
      <DndContext
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToFirstScrollableAncestor]}
      >
        <div style={{ overflow: 'hidden', position: 'relative' }}>
          <AutoSizer disableWidth={false}>
            {({ height, width }) => {
              const headerHeight = tileSize
              const gridHeight = height - tileSize

              return (
                <>
                  <FixedSizeList
                    layout={'horizontal'}
                    itemSize={tileSize}
                    height={headerHeight}
                    itemCount={columnCount + 1}
                    width={width}
                    ref={headerRef}
                    className={'grid-header'}
                    style={{ overflow: 'hidden', zIndex: 2 }}
                  >
                    {HeaderCell}
                  </FixedSizeList>
                  <FixedSizeGrid
                    columnCount={columnCount}
                    rowCount={rowCount}
                    columnWidth={tileSize}
                    height={gridHeight}
                    rowHeight={tileSize}
                    width={width}
                    onScroll={handleGridScroll}
                    overscanColumnCount={5}
                    overscanRowCount={5}
                  >
                    {Cell}
                  </FixedSizeGrid>
                  <div className={'notes-grid-container'}>
                    <NotesGrid tileSize={tileSize} />
                  </div>
                </>
              )
            }}
          </AutoSizer>
        </div>

        <GridNoteDragOverlay />
      </DndContext>
      <div className={'zoom-buttons'}>
        <button
          onClick={() => {
            const newTileSize = tileSize + 10
            document.body.style.setProperty('--header-size', `${newTileSize}px`)
            setTileSize(newTileSize)
          }}
        >
          Zoom in
        </button>
        <button
          onClick={() => {
            const newTileSize = tileSize - 10
            document.body.style.setProperty('--header-size', `${newTileSize}px`)
            setTileSize(newTileSize)
          }}
        >
          Zoom out
        </button>
      </div>
    </div>
  )
}

export default App
