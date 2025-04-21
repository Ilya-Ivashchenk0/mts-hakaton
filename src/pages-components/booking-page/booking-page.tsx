'use client'

import { FormValues, Room } from '@/src'
import { BookingForm } from '@/src/features/booking-form'
import { RoomCard } from '@/src/shared/ui/room-card'
import { endpoints } from '@/src/utils/endpoints'
import { useRouter } from 'next/navigation'

export const BookingPage = ({ room }: { room: Room }) => {
  const router = useRouter()

  const onSubmit = async (values: FormValues) => {
    try {
      const endpoint = endpoints.cms.submitOrder({ room: room, user: values })
      const res = await fetch(endpoint.url, endpoint.options)
      console.log(res)

      if (!res.ok) throw new Error('Failed to submit order')

      const data = await res.json()

      console.log(data)

      router.push('/booking-confirmation')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <main className="flex w-full flex-col gap-14 px-30 pt-14">
      <RoomCard room={room} mode="horizontal" />
      <BookingForm onSubmit={onSubmit} />
    </main>
  )
}
