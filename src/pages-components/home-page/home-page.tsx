import Image from 'next/image'
import { HomePageProps } from './types'
import { FC } from 'react'
import { RoomForm } from '@/src/features/room-form'
import logo_full from '@/shared/images/logo_full.svg'

export const HomePage: FC<HomePageProps> = ({
  title,
  subtitle,
  img_1,
  img_2,
  img_3
}) => {
  return (
    <div className="relative grid w-full grid-cols-10 grid-rows-10 gap-4 px-10 pt-14">
      <div className="z-20 col-start-2 col-end-8 row-start-3 row-end-6 flex flex-col items-start gap-4 text-white">
        <div className="relative min-h-10 w-16">
          <Image
            src={logo_full.src}
            alt="logo"
            fill
            className="h-10 w-auto"
            priority
          />
        </div>
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">{title}</h1>
        <p className="text-base md:text-lg">{subtitle}</p>
      </div>
      <RoomForm />
      <div className="relative col-start-1 col-end-6 row-start-1 row-end-11">
        <Image
          src={img_1}
          alt="img_1"
          fill
          className="rounded-lg object-cover brightness-75"
          sizes="(max-width: 1440px) 100vw, 50vw"
        />
      </div>
      <div className="relative z-10 col-start-4 col-end-10 row-start-3 row-end-10">
        <Image
          src={img_2}
          alt="img_2"
          fill
          className="rounded-lg object-cover brightness-75"
          sizes="(max-width: 1440px) 100vw, 50vw"
        />
      </div>
      <div className="relative z-20 col-start-8 col-end-13 row-start-2 row-end-11">
        <Image
          src={img_3}
          alt="img_3"
          fill
          className="rounded-lg object-cover brightness-75"
          sizes="(max-width: 1440px) 100vw, 50vw"
        />
      </div>
    </div>
  )
}
