import { endpoints } from '@/src/utils/endpoints'
import img_1 from '@/shared/images/home/1.png'
import img_2 from '@/shared/images/home/2.png'
import img_3 from '@/shared/images/home/3.png'
import logo_full from '@/shared/images/logo_full.svg'
import { RoomForm } from '@/src/features/room-form'
import Image from 'next/image'

const MainLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  try {
    const endpoint = endpoints.cms.layouts.mainLayout()
    const mainLayoutData = await fetch(endpoint.url, endpoint.options)

    if (!mainLayoutData.ok) {
      throw new Error('Failed to fetch header dict')
    }

    const mainLayoutDict = await mainLayoutData.json()

    return (
      <main className="mt-3 flex min-h-[calc(100vh-12px)] flex-col">
        <div className="relative grid max-h-[900px] w-full grid-cols-11 grid-rows-11 flex-wrap gap-4 px-10 pt-14">
          <div className="z-20 col-start-2 col-end-8 row-start-3 row-end-5 flex flex-col items-start gap-4 text-white">
            <div className="relative min-h-10 w-16">
              <Image
                src={logo_full.src}
                alt="logo"
                fill
                className="h-10 w-auto"
                priority
              />
            </div>
            <h1 className="text-5xl font-bold">
              {mainLayoutDict.data.records[0].fields.title}
            </h1>
            <p className="text-lg">
              {mainLayoutDict.data.records[0].fields.subtitle}
            </p>
          </div>
          <RoomForm />
          <div className="relative col-start-1 col-end-6 row-start-1 row-end-12">
            <Image
              src={img_1}
              alt="img_1"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
            />
          </div>
          <div className="relative z-10 col-start-4 col-end-10 row-start-3 row-end-10">
            <Image
              src={img_2}
              alt="img_2"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
            />
          </div>
          <div className="relative z-20 col-start-8 col-end-13 row-start-2 row-end-11">
            <Image
              src={img_3}
              alt="img_3"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
            />
          </div>
        </div>
        {children}
      </main>
    )
  } catch (error) {
    console.error(error)
    return null
  }
}

export default MainLayout
