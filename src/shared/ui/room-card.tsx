'use client'

import { Room } from '@/src'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from './card'
import { Button } from './button'
import { Wifi, ShowerHead, Tv } from 'lucide-react'
import { Separator } from './separator'
import room_1 from '@/shared/images/rooms/number1.png'
import room_2 from '@/shared/images/rooms/number2.png'
import room_3 from '@/shared/images/rooms/number3.png'
import room_4 from '@/shared/images/rooms/r1.jpg'
import room_5 from '@/shared/images/rooms/r2.jpeg'
import room_6 from '@/shared/images/rooms/r3.jpg'
import room_7 from '@/shared/images/rooms/r4.jpg'
import Image from 'next/image'
import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import { DatePicker } from './date-picker'
import Link from 'next/link'

const roomImages = [room_1, room_2, room_3, room_4, room_5, room_6, room_7]

const ComfortIcons = () => (
  <div className="flex gap-2">
    {[Wifi, ShowerHead, Tv].map((Icon, index) => (
      <div
        key={index}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-foreground/10 p-2"
      >
        <Icon size={16} />
      </div>
    ))}
  </div>
)

const roomCardVariants = cva('', {
  variants: {
    mode: {
      vertical: 'flex flex-col',
      horizontal: 'flex-row gap-5 border-none bg-transparent shadow-none'
    }
  },
  defaultVariants: {
    mode: 'vertical'
  }
})

const imageVariants = cva('relative object-cover', {
  variants: {
    mode: {
      vertical: 'min-h-64 w-full rounded-t-xl',
      horizontal: 'min-h-[250px] w-full max-w-[387px] rounded-none'
    }
  }
})

const contentVariants = cva('flex flex-col', {
  variants: {
    mode: {
      vertical: '',
      horizontal: 'flex-1 px-6'
    }
  }
})

const footerVariants = cva('flex flex-col justify-between', {
  variants: {
    mode: {
      vertical: '',
      horizontal: 'items-start gap-5'
    }
  }
})

export const RoomCard = ({
  room,
  mode = 'vertical'
}: {
  room: Room
  mode?: 'vertical' | 'horizontal'
}) => {
  return (
    <Card className={roomCardVariants({ mode })}>
      <CardHeader className={imageVariants({ mode })}>
        <Image
          src={room_1.src}
          alt={`Фото комнаты ${room.fields['Класс']}`}
          fill
          className={cn(imageVariants({ mode }))}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </CardHeader>

      <div className={contentVariants({ mode })}>
        <CardContent className="flex flex-col gap-2">
          <div className="flex w-full justify-between">
            <CardTitle>{room.fields['Класс']}</CardTitle>
            <CardDescription>
              {room.fields['Статус бронирования']}
            </CardDescription>
          </div>

          <div
            className={cn('flex justify-between', {
              'pb-5': mode === 'vertical'
            })}
          >
            <CardAction>{room.fields['Цена за сутки']} ₽</CardAction>
            {mode === 'horizontal' && <ComfortIcons />}
          </div>
          {mode === 'horizontal' && (
            <p className="pb-3">улица Рубинштейна, д.7/2, Санкт-Петербург</p>
          )}
        </CardContent>

        <CardFooter className={footerVariants({ mode })}>
          <Separator />

          {mode === 'vertical' ? (
            <div className="flex w-full justify-between pt-2">
              <ComfortIcons />
              <Link href={`/booking/${room.recordId}`}>
                <Button type="button">Бронировать</Button>
              </Link>
            </div>
          ) : (
            <>
              <span>Период проживания</span>
              <DatePicker />
            </>
          )}
        </CardFooter>
      </div>
    </Card>
  )
}
