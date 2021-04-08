import Head from 'next/head'
import styles from './head.module.css'


export default function Head_icon({children}) {
  return (
  <Head>
    
      {children}
      <link rel="icon" href="/favicon.ico" />
   </Head>  
  )
}

