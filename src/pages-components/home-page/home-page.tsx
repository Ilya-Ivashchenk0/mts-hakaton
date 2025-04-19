import Image from 'next/image'
import { FC } from 'react'
import { HomePageProps } from './types'
import img_1 from '@/shared/images/home/1.png'
import img_2 from '@/shared/images/home/2.png'
import img_3 from '@/shared/images/home/3.png'
import logo_full from '@/shared/images/logo_full.svg'
import { RoomForm } from '@/src/features/room-form'

export const HomePage: FC<HomePageProps> = ({ title, subtitle }) => {
  return (
    <div className="relative grid max-h-[900px] w-full grid-cols-12 grid-rows-12 gap-4 px-10 pt-14">
      <div className="z-20 col-start-2 col-end-7 row-start-3 row-end-5 flex flex-col items-start gap-4 text-white">
        <Image
          src={logo_full.src}
          alt="logo"
          width={67}
          height={40}
          className="h-10 w-auto"
        />
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg">{subtitle}</p>
      </div>
      <RoomForm />
      <div className="relative col-start-1 col-end-6 row-start-1 row-end-12 overflow-hidden rounded-lg">
        <Image src={img_1} alt="img_1" fill className="object-cover" />
      </div>
      <div className="relative z-10 col-start-4 col-end-10 row-start-3 row-end-10 overflow-hidden rounded-lg">
        <Image src={img_2} alt="img_2" fill className="object-cover" />
      </div>
      <div className="relative z-20 col-start-8 col-end-13 row-start-2 row-end-11 overflow-hidden rounded-lg">
        <Image src={img_3} alt="img_3" fill className="object-cover" />
      </div>
    </div>
  )
}
