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
      <main className="mt-3 flex min-h-[calc(100vh-12px)] flex-col">
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
