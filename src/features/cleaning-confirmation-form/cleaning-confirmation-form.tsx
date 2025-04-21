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
import { Button } from '@/shared/ui/button'

export type FormData = {
  phone: string;
}

const formSchema = z.object({
  phone: z.string()
    .min(1, 'Номер должен содержать минимум 1 символов')
    .max(3, 'Номер должен содержать максимум 2 символов')
}) satisfies z.ZodType<FormData>

export const CleaningConfirmationForm = ({
  onSubmit
}: {
  onSubmit: (values: FormData) => void
}) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: ''
    }
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-4 bg-gray-700/20 px-25 py-5 rounded-xl"
      >
        <h2 className="text-2xl font-semibold">Введите номер</h2>
        <div className="w-full max-w-md">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Телефон</FormLabel>
                <FormControl>
                  <Input
                    placeholder="153"
                    {...field}
                    className="text-center"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-3 pt-6">
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Отправить
          </Button>
        </div>
      </form>
    </Form>
  )
}