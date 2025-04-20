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

interface DatePickerProps {
  selected?: DateRange
  onSelect?: (range: DateRange | undefined) => void
  className?: string
}

export const DatePicker = ({
  selected,
  onSelect,
  className
}: DatePickerProps) => {
  const today = new Date()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'h-10 w-full justify-start bg-white text-left font-normal',
            !selected?.from && 'text-muted-foreground',
            className
          )}
        >
          <CalendarIcon className="h-4 w-4" />
          {selected?.from ? (
            selected.to ? (
              <>
                {format(selected.from, 'dd MMM yyyy', { locale: ru })} -{' '}
                {format(selected.to, 'dd MMM yyyy', { locale: ru })}
              </>
            ) : (
              format(selected.from, 'dd MMM yyyy', { locale: ru })
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
          selected={selected}
          onSelect={onSelect}
          numberOfMonths={2}
          locale={ru}
          fromDate={today}
          disabled={{ before: today }}
        />
      </PopoverContent>
    </Popover>
  )
}
