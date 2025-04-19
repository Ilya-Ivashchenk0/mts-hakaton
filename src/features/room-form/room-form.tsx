'use client'

import { DatePicker } from '@/shared/ui/date-picker'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/shared/ui/select'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { useState } from 'react'

export const RoomForm = () => {
  const addresses = [
    'Москва, ул. Тверская, 10',
    'Санкт-Петербург, Невский пр., 25',
    'Казань, ул. Баумана, 15',
    'Сочи, ул. Навагинская, 7'
  ]

  const [selectedAddress, setSelectedAddress] = useState(addresses[0])

  return (
    <div className="z-40 col-start-2 col-end-11 row-start-6 row-end-8 w-full rounded-lg bg-white/70 px-4 pt-5">
      <form
        action=""
        className="relative flex flex-wrap items-end justify-between text-[#040404]"
      >
        <div className="flex flex-col gap-2">
          <span>Адрес</span>
          <Select value={selectedAddress} onValueChange={setSelectedAddress}>
            <SelectTrigger className="min-w-[280px] bg-white">
              <SelectValue placeholder="Выберите адрес" />
            </SelectTrigger>
            <SelectContent>
              {addresses.map(address => (
                <SelectItem key={address} value={address}>
                  {address}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <span>Период проживания</span>
          <DatePicker />
        </div>
        <div className="flex flex-col gap-2">
          <span>Количество человек</span>
          <Input defaultValue={1} />
        </div>
        <div className="flex h-full items-center justify-center">
          <Button type="submit" className="rounded-3xl">
            Найти
          </Button>
        </div>
      </form>
    </div>
  )
}
