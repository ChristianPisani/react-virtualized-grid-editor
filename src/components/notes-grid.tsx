import { Draggable } from './draggable.tsx'
import { GridNote } from './grid-note.tsx'
import { useGridStore } from '../store/grid-store.ts'

export const NotesGrid = ({ tileSize }: { tileSize: number }) => {
  const notes = useGridStore(state => state.notes)

  return (
    <div className={'notes-grid'}>
      {notes.map(note => (
        <div
          style={{
            position: 'absolute',
            width: tileSize,
            height: tileSize,
            left: `${tileSize * note.x}px`,
            top: `${tileSize * note.y}px`,
          }}
        >
          <Draggable id={`${note.id}`}>
            <GridNote />
          </Draggable>
        </div>
      ))}
    </div>
  )
}
