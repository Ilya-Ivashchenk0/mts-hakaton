export type Room = {
  recordId: string
  fields: {
    'Номер комнаты': string
    Класс: string
    Описание: string
    'Статус бронирования': string
    'Статус уборки': string
    Стоимость: number
    Клининг?: string[]
  }
}
