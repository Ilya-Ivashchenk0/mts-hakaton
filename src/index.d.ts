export type Room = {
  recordId: string
  fields: {
    Номер: string
    'Статус бронирования': 'Свободен' | 'Занят' | string
    'Цена за сутки': number
    'ID бронирования'?: string[]
    'Статус уборки': 'Готов' | 'На уборке' | string
    'Текущий уборщик'?: string[]
    Удобства: string[]
    Отзывы?: string[]
    Класс: 'Стандарт' | 'Студия' | 'Люкс'
  }
}

export type FormValues = {
  fullName: string
  email: string
  phone: string
  country: string
  hasPets: boolean
  hasChildren: boolean
}
