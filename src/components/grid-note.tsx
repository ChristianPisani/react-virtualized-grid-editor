import { useGridStore } from '../store/grid-store.ts'
import { DragOverlay } from '@dnd-kit/core'

export const GridNote = () => {
  return <div className={'grid-note'} />
}

export const GridNoteDragOverlay = () => {
  const draggingId = useGridStore(state => state.draggingId)

  return (
    <>
      <DragOverlay>{draggingId ? <GridNote /> : null}</DragOverlay>,
    </>
  )
}
