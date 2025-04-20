'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/shared/ui/select'
import { Button } from '@/shared/ui/button'
import { DatePicker } from '@/shared/ui/date-picker'
import { addDays } from 'date-fns'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  address: z.string().min(1, { message: 'Выберите адрес' }),
  dateRange: z.object({
    from: z.date(),
    to: z.date()
  }),
  guests: z.number().min(1, { message: 'Минимум 1 человек' })
})

export const RoomForm = () => {
  const router = useRouter()

  const addresses = ['Стандарт', 'Студия', 'Люкс']

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: addresses[0],
      dateRange: {
        from: new Date(),
        to: addDays(new Date(), 3)
      },
      guests: 1
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const params = new URLSearchParams({
      address: values.address,
      from: values.dateRange.from.toISOString(),
      to: values.dateRange.to.toISOString(),
      guests: values.guests.toString()
    })

    router.push(`/rooms?${params.toString()}`)
  }

  return (
    <div className="z-40 col-start-2 col-end-10 row-start-6 row-end-8 flex w-full rounded-lg bg-white/80 p-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-wrap items-center justify-between gap-10"
        >
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="flex flex-col items-start justify-between">
                  Класс
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full bg-white">
                        <SelectValue placeholder="Выберите адрес" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {addresses.map(address => (
                        <SelectItem key={address} value={address}>
                          {address}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateRange"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="flex flex-col items-start justify-between">
                  Период проживания
                  <FormControl>
                    <DatePicker
                      selected={field.value}
                      onSelect={field.onChange}
                    />
                  </FormControl>
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="guests"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="flex flex-col items-start justify-between">
                  Количество человек
                  <FormControl>
                    <Input
                      type="number"
                      min="1"
                      max="10"
                      {...field}
                      onChange={e => field.onChange(parseInt(e.target.value))}
                      className="w-full"
                    />
                  </FormControl>
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-end">
            <Button type="submit" className="w-full">
              Найти
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
