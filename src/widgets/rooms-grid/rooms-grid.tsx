import { FC } from 'react'
import { RoomsGridProps } from './types'
import { RoomCard } from '@/src/shared/ui/room-card'

export const RoomsGrid: FC<RoomsGridProps> = ({ rooms }) => {
  return (
    <div className="relative z-40 grid grid-cols-3 gap-5 px-11 py-14">
      {rooms.map(room => (
        <RoomCard key={room.recordId} room={room} />
      ))}
    </div>
  )
}
