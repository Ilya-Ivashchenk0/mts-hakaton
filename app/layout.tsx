import type { Metadata } from 'next'
import { montserrat, openSans } from '@/shared/fonts/fonts'
import './globals.css'
import { Header } from '@/widgets/header'

export const metadata: Metadata = {
  title: 'Hotel Booking',
  description: 'Сайт создан в рамках хакатона MTS по направлению True Tabs'
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="ru">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}

export default RootLayout