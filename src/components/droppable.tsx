import { ReactNode } from 'react'
import { useDroppable } from '@dnd-kit/core'

export const Droppable = ({
  columnIndex,
  rowIndex,
  id,
  children,
}: {
  columnIndex: number
  rowIndex: number
  id: string
  children: ReactNode
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
    data: {
      rowIndex,
      columnIndex,
    },
  })

  const droppableStyle = {
    position: 'absolute',
    inset: 0,
    zIndex: -1,
    display: 'grid',
    placeItems: 'center',
    backgroundColor: isOver ? 'white' : '',
  }

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <div ref={setNodeRef} style={droppableStyle}>
        {children}
      </div>
    </>
  )
}
