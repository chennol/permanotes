import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout'

const profilePic= () => (
    <Image
      src="/images/profile.jpg" // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      alt="Your Name"
    />
  )

export default function Notes(){
    return (
        <Layout>
 
        <Head>
            <title>永久记事本</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <h1>First Note</h1>
            <h2>
                <Link href='/'>
                    <a>Back to home</a>
                </Link>
            </h2>


        </Layout>


    )


}