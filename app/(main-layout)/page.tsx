import { HomePage } from '@/src/pages-components/home-page'
import { endpoints } from '@/src/utils/endpoints'
import img_1 from '@/shared/images/home/1.png'
import img_2 from '@/shared/images/home/2.png'
import img_3 from '@/shared/images/home/3.png'

const Home = async () => {
  try {
    const endpoint = endpoints.cms.pages.home()
    const mainLayoutData = await fetch(endpoint.url, endpoint.options)

    if (!mainLayoutData.ok) {
      throw new Error('Failed to fetch header dict')
    }

    const mainLayoutDict = await mainLayoutData.json()

    return (
      <HomePage
        title={mainLayoutDict.data.records[0].fields.title}
        subtitle={mainLayoutDict.data.records[0].fields.subtitle}
        img_1={img_1}
        img_2={img_2}
        img_3={img_3}
      />
    )
  } catch (error) {
    console.error(error)
    return null
  }
}

export default Home
