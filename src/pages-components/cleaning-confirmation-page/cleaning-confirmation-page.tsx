'use client'

import { CleaningConfirmationForm } from "@/features/cleaning-confirmation-form"
import { endpoints } from "@/src/utils/endpoints"
import { useRouter } from "next/navigation"

export const CleaningConfirmationPage = () => {
  const router = useRouter()
  const onSubmit = async (values: { phone: string }) => {
    try {
      const endpoint = endpoints.cms.submitCleaningOrder(values.phone)
      const res = await fetch(endpoint.url, endpoint.options)

      if (!res.ok) throw new Error('Failed to submit order')

      router.push('/')
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <main className="flex w-full flex-col gap-14 px-30 pt-14">
      <CleaningConfirmationForm onSubmit={onSubmit} />
    </main>
  )
}