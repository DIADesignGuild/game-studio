import { Cell } from './Cell'
import { TAIWAN_HAND_SIZE } from '../../constants/settings'

export const EmptyRow = () => {
  const emptyCells = Array.from(Array(TAIWAN_HAND_SIZE))

  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
