'use client'

import * as React from 'react'
import { addDays, format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'
import { DateRange } from 'react-day-picker'

import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { Calendar } from '@/shared/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover'

export const DatePicker = ({
  className
}: React.HTMLAttributes<HTMLDivElement>) => {
  const today = new Date()
  const defaultStartDate = addDays(today, 0)
  const defaultEndDate = addDays(today, 3)

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: defaultStartDate,
    to: defaultEndDate
  })

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'dd MMM yyyy', { locale: ru })} -{' '}
                  {format(date.to, 'dd MMM yyyy', { locale: ru })}
                </>
              ) : (
                format(date.from, 'dd MMM yyyy', { locale: ru })
              )
            ) : (
              <span>Выберите даты</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={today}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            locale={ru}
            fromDate={today} // Запрет выбора дат раньше сегодня
            disabled={{ before: today }} // Отключаем даты до сегодня
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
