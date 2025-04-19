import { FC } from 'react'
import { RoomsGridProps } from './types'

export const RoomsGrid: FC<RoomsGridProps> = ({ rooms }) => {
  return (
    <div>
      {rooms.map(room => (
        <div key={room.recordId}>{room.fields['Номер комнаты']}</div>
      ))}
    </div>
  )
}
