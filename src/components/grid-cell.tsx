import { ReactNode } from 'react'

export const GridCell = ({ children }: { children?: ReactNode }) => {
  return <div className={`grid-cell`}>{children}</div>
}
