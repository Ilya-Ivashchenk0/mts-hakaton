import { Header } from '@/widgets/header'
import { endpoints } from '@/src/utils/endpoints'

const MainLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  try {
    const endpoint = endpoints.cms.widgets.header()
    const res = await fetch(endpoint.url, endpoint.options)

    if (!res.ok) {
      throw new Error('Failed to fetch header dict')
    }

    const headerDict = await res.json()

    return (
      <main className='pt-3'>
        <Header dict={headerDict.data} />
        {children}
      </main>
    )
  } catch (error) {
    console.error(error)
    return null
  }
}

export default MainLayout
