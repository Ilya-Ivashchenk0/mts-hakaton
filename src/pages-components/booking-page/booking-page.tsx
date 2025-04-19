import { BookingForm } from '@/src/features/booking-form'
import { RoomCard } from '@/src/shared/ui/room-card'

export const BookingPage = () => {
  return (
    <main className="flex w-full flex-col gap-14 px-30 pt-14">
      <RoomCard
        room={{
          recordId: 'ssss',
          fields: {
            'Номер комнаты': 'ssssss',
            Класс: 'ssssssss',
            Описание: 'ssssssss',
            'Статус бронирования': 'ssssssss',
            'Статус уборки': 'ssssssss',
            Стоимость: 48,
            Клининг: ['dsdsd', 'sdsdsd']
          }
        }}
        mode="horizontal"
      />
      <BookingForm />
    </main>
  )
}
