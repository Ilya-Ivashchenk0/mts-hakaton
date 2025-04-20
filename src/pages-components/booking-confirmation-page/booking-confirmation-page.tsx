import Image from 'next/image'
import bc from '@/shared/images/bc.svg'

export const BookingConfirmationPage = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-5 px-10 pt-14">
      <div className="flex h-[535px] w-[370] flex-col items-center rounded-4xl px-14 pt-13 shadow-[0_8px_30px_rgba(0,230,171,0.12)]">
        <div className="relative h-[160px] w-[200px]">
          <Image src={bc.src} alt="" fill className="object-cover" />
        </div>
        <h1 className="pt-16 text-2xl font-semibold">Номер забронирован</h1>
        <p className="max-w-3/4 pt-5 text-center text-slate-700/70">
          На почту вышлем всю информацию
        </p>
      </div>
    </main>
  )
}
