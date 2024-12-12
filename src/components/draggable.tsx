import { ReactNode } from 'react'
import { useDraggable } from '@dnd-kit/core'

export const Draggable = ({
  id,
  children,
}: {
  id: string
  children: ReactNode
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  })
  const style = {
    position: 'absolute',
    inset: 0,
    display: 'grid',
    placeItems: 'center',
    // transform: `translate3d(${transform?.x ?? 0}px, ${transform?.y ?? 0}px, 0)`,
  }

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
        {children}
      </div>
    </>
  )
}
