import { RoomsPage } from '@/pages/rooms-page'
import { endpoints } from '@/utils/endpoints'

const Rooms = async () => {
  try {
    const endpoint = endpoints.cms.pages.rooms()
    const roomsData = await fetch(endpoint.url, endpoint.options)

    if (!roomsData.ok) {
      throw new Error('Failed to fetch rooms dict')
    }

    const rooms = await roomsData.json()

    return <RoomsPage rooms={rooms.data.records} />
  } catch (error) {
    console.error(error)
    return null
  }
}

export default Rooms
