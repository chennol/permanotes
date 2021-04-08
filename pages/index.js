import Head_context from '../components/head'
import Main_context from '../components/main'
import Footer_context from '../components/footer'
import Header_context from '../components/header'
import Layout from '../components/layout'
import { Children } from 'react'

const siteTitle = 'Memory Notes'

export default function Home() {

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  return (
    <Layout>
    <Head_context>
      <title>{siteTitle}</title>
    </Head_context>

    <Header_context>
    </Header_context>

    <Main_context>
    </Main_context>

    <Footer_context>
    </Footer_context>
  </Layout>
 

  )
}
