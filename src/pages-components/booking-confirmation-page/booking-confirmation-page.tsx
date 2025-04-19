import Image from 'next/image'
import bc from '@/shared/images/bc.svg'

export const BookingConfirmationPage = () => {
  return (
    <main className='flex flex-col items-center justify-center gap-5 px-10 pt-14'>
      <div className='rounded-4xl w-[370] h-[535px] px-14 pt-13 flex flex-col items-center shadow-[0_8px_30px_rgba(0,230,171,0.12)]'>
        <div className='relative w-[200px] h-[160px]'>
          <Image src={bc.src} alt='' fill className='object-cover' />
        </div>
        <h1 className='pt-16 font-semibold text-2xl'>Номер забронирован</h1>
        <p className='pt-5 text-center max-w-3/4 text-slate-700/70'>На почту вышлем всю информацию</p>
      </div>
    </main>
  )
}