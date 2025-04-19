import { HomePage } from '@/src/pages-components/home-page'
import { endpoints } from '@/src/utils/endpoints'
import { cookies } from 'next/headers'

const Home = async () => {
  try {
    const endpoint = endpoints.cms.pages.home()
    const res = await fetch(endpoint.url, {
      ...endpoint.options,
      credentials: 'include'
    })

    if (!res.ok) {
      throw new Error('Failed to fetch home page')
    }

    const data = await res.json()

    const { title = 'Default Title', subtitle = 'Default Subtitle' } =
      data.data.records[0].fields

    return <HomePage title={title} subtitle={subtitle} />
  } catch (error) {
    console.error(error)
    return null
  }
}

export default Home
