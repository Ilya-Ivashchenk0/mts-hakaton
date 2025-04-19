import { FC } from 'react'
import { RoomsPageProps } from './types'
import { RoomsGrid } from '@/src/widgets/rooms-grid/rooms-grid'

export const RoomsPage: FC<RoomsPageProps> = ({ rooms }) => {
  const filteredRooms = rooms.filter(
    room =>
      room.fields['Статус уборки'] === 'Готов' &&
      room.fields['Статус бронирования'] === 'Свободен'
  )

  return (
    <div className="">
      <RoomsGrid rooms={filteredRooms} />
    </div>
  )
}
