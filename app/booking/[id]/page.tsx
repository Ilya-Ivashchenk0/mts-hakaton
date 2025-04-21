import { BookingPage } from '@/pages/booking-page'
import { Room } from '@/src'
import { endpoints } from '@/src/utils/endpoints'
import { redirect } from 'next/navigation'

const Booking = async ({ params }: { params: Promise<any> }) => {
  try {
    const { id } = await params
    const endpoint = endpoints.cms.getOneRoom(id)
    const res = await fetch(endpoint.url, endpoint.options)
    if (!res.ok) throw new Error('Failed to fetch room')
    const data = await res
      .json()
      .then(data => data.data.records)
      .catch(err => {
        console.error(err)
        throw new Error('Failed to fetch room')
      })

    const room = data.find((i: Room) => i.recordId === id)
    console.log(room)

    if (!room) {
      redirect('/not-found')
    }

    return <BookingPage room={room} />
  } catch (err) {
    console.error(err)
    redirect('/error')
  }
}

export default Booking
