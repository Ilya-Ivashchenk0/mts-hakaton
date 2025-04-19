import type { Metadata } from 'next'
import { montserrat, openSans } from '@/shared/fonts/fonts'
import '@/shared/styles/globals.css'
import { Header } from '@/src/widgets/header'
import { endpoints } from '@/src/utils/endpoints'

export const metadata: Metadata = {
  title: 'Hotel Booking',
  description: 'Сайт создан в рамках хакатона MTS по направлению True Tabs'
}

const RootLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  try {
    const endpointHeader = endpoints.cms.widgets.header()
    const [headerData] = await Promise.all([
      fetch(endpointHeader.url, endpointHeader.options)
    ])

    if (!headerData.ok) {
      throw new Error('Failed to fetch header dict')
    }

    const headerDict = await headerData.json()

    return (
      <html lang="ru">
        <body
          className={`${montserrat.variable} ${openSans.variable} antialiased`}
        >
          <Header dict={headerDict.data} />
          {children}
        </body>
      </html>
    )
  } catch (error) {
    console.error(error)
    return null
  }
}

export default RootLayout
