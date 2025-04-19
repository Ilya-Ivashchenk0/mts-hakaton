import { RoomCard } from '@/src/shared/ui/room-card'

export const BookingPage = () => {
  return (
    <main className="w-full pt-14 px-30">
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
    </main>
  )
}
