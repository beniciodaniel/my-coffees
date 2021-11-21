import client from 'graphql/client'
import AboutTemplate from 'templates/About'
import { GET_PAGES } from 'graphql/queries'

export default function AboutPage() {
  return <AboutTemplate />
}

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES)

  console.log(pages)

  return {
    props: {
      pages
    }
  }
}
