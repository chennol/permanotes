import Link from 'next/link'
import Image from 'next/image'
import styles from './main.module.css'

export default function Main_context({ children }) {
  return (
    <main className = {styles.mainstyle}>
        <h1>
          Welcome to Memory Notes
        </h1>

        <div className={styles.grid}>
          <Link href="/notes/">
            <a  className={styles.card} id= "note1">
              <Image 
                src="/..\public\images\note1.png" // Route of the image file
                height={650} // Desired size with correct aspect ratio
                width={500} // Desired size with correct aspect ratio
                alt="Note 1"
              />
            </a>
          </Link>
          <Link href="/notes/">
            <a className={styles.card} id='note2'>
              <Image 
                src="/..\public\images\note2.png" // Route of the image file
                height={650} // Desired size with correct aspect ratio
                width={500} // Desired size with correct aspect ratio
                alt="Note 2"
              />
            </a>
          </Link>
          <Link href="/notes/">
            <a className={styles.card} id='note3'>
              <Image 
                src="/..\public\images\note3.png" // Route of the image file
                height={650} // Desired size with correct aspect ratio
                width={500} // Desired size with correct aspect ratio
                alt="Note 3"
              />
           </a>
          </Link>
          <Link href="/notes/">
            <a className={styles.card} id='note4'>
              <Image 
                src="/..\public\images\note4.png" // Route of the image file
                height={650} // Desired size with correct aspect ratio
                width={500} // Desired size with correct aspect ratio
                alt="Note 4"
              />
            </a>
          </Link>
          <Link href="/notes/">
            <a className={styles.card} id='note5'>
              <Image 
                src="/..\public\images\note5.png" // Route of the image file
                height={650} // Desired size with correct aspect ratio
                width={500} // Desired size with correct aspect ratio
                alt="Note 5"
              />
            </a>
          </Link>  
        </div>
    </main>
  )
}