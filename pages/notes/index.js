import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import Head_context from '../../components/head'
import Footer_context from '../../components/footer'
import Header_context from '../../components/header'
import Note_context from '../../components/note'

const siteTitle = '1111 Notes'

export default function Notes({noteData}){
    return (
        <Layout>
            <Head_context>
                <title>{siteTitle}</title>
            </Head_context>

            <Header_context>
            </Header_context>

            <Note_context>
            </Note_context>

            <Footer_context>
            
            </Footer_context>

        </Layout>
        


    )


}