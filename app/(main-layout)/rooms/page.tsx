import { RoomsPage } from '@/pages/rooms-page'
import { Room } from '@/src'
import { endpoints } from '@/utils/endpoints'
import { redirect } from 'next/navigation'

interface Props {
  searchParams: {
    address?: string
    from?: string
    to?: string
    guests?: string
  }
}

const Rooms = async ({ searchParams }: Props) => {
  try {
    const {from, to, guests, address } = searchParams

    const endpoint = endpoints.cms.pages.getAllRooms()

    const res = await fetch(endpoint.url, endpoint.options)

    if (!res.ok) throw new Error('Failed to fetch rooms')

    const data = await res
      .json()
      .then(data => data.data.records)
      .catch(err => {
        console.error(err)
        throw new Error('Failed to fetch rooms')
      })

    const filteredRooms = data.filter(
      (room: Room) =>
        room.fields['Статус бронирования'] === 'Свободен' &&
        room.fields['Статус уборки'] === 'Готов'
    )

    return <RoomsPage rooms={filteredRooms} />
  } catch (err) {
    console.error(err)
    redirect('/error')
  }
}

export default Rooms
