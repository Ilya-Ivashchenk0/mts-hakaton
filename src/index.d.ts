export type Room = {
  recordId: string
  fields: {
    'Номер комнаты': string
    'Статус бронирования': string
    'Статус уборки': string
    Стоимость: number
    Клининг?: string[]
  }
}
