import { FC } from 'react'
import { RoomsGridProps } from './types'
import { RoomCard } from '@/src/shared/ui/room-card'

export const RoomsGrid: FC<RoomsGridProps> = ({ rooms }) => {
  return (
    <div className="relative z-40 grid -translate-y-65 grid-cols-3 gap-5 bg-white px-11 pt-14">
      {rooms.map(room => (
        <RoomCard key={room.recordId} room={room} />
      ))}
    </div>
  )
}
