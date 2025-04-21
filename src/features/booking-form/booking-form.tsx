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
import { Checkbox } from '@/shared/ui/checkbox'
import { Button } from '@/shared/ui/button'
import { FormValues } from '@/src'

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: 'Имя должно содержать минимум 2 символа'
  }),
  email: z.string().email({
    message: 'Введите корректный email'
  }),
  phone: z.string().min(11, {
    message: 'Введите корректный номер телефона'
  }),
  country: z.string(),
  hasPets: z.boolean(),
  hasChildren: z.boolean()
}) satisfies z.ZodType<FormValues>

export const BookingForm = ({
  onSubmit
}: {
  onSubmit: (values: FormValues) => void
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      country: 'РФ',
      hasPets: false,
      hasChildren: false
    }
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-4 bg-gray-700/20 px-25 py-5"
      >
        <h2 className="text-2xl font-semibold">Контактные данные</h2>
        <div className="flex w-full items-start justify-between gap-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ФИО</FormLabel>
                <FormControl>
                  <Input placeholder="Иванов Иван" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@mail.ru" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Телефон</FormLabel>
                <FormControl>
                  <Input placeholder="+7(000) 000-00-00" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>Страна</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="min-w-[280px] bg-white">
                      <SelectValue placeholder="Выберите страну" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="РФ">Российская Федерация</SelectItem>
                    <SelectItem value="РБ">Республика Беларусь</SelectItem>
                    <SelectItem value="КЗ">Казахстан</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full gap-2.5">
          <FormField
            control={form.control}
            name="hasPets"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>Животные</FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hasChildren"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>Дети</FormLabel>
              </FormItem>
            )}
          />
        </div>
        <div className="flex max-w-1/2 items-center justify-center gap-3 pt-6">
          <Button type="submit" variant="outline" className="w-full">
            Добавить человека
          </Button>
          <Button type="submit" className="w-full">
            Бронировать
          </Button>
        </div>
      </form>
    </Form>
  )
}
