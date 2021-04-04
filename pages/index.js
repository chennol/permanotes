import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion';


export default function Home() {

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  return (
    <div className="container">

        <Head>
          <title>永久记事本</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>



      <main>

            <h1 className="title">
              Welcome to <Link href="/notes">Perma Notes</Link>
            </h1>


        <div className="grid">
        <Link href="/notes">
          <a  className="card" id= "note1">
            <Image 
                src="/images/note1.png" // Route of the image file
                height={650} // Desired size with correct aspect ratio
                width={500} // Desired size with correct aspect ratio
                alt="Note 4"
            />
         
          </a>
          </Link>
          <Link href="/notes">
          <a className="card">
          <Image 
                src="/images/note2.png" // Route of the image file
                height={650} // Desired size with correct aspect ratio
                width={500} // Desired size with correct aspect ratio
                alt="Note 4"
            />
          </a>
          </Link>
          <Link href="/notes">
          <a
            className="card"
          >
            <Image 
                src="/images/note3.png" // Route of the image file
                height={650} // Desired size with correct aspect ratio
                width={500} // Desired size with correct aspect ratio
                alt="Note 4"
            />
          </a>
          </Link>
          <Link href="/notes">
          <a
            className="card"
          >
            <Image 
                src="/images/note4.png" // Route of the image file
                height={650} // Desired size with correct aspect ratio
                width={500} // Desired size with correct aspect ratio
                alt="Note 4"
            />
          </a>
          </Link>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-image: url("/images/background1.jpg");

        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          padding: 7000px 1110;

        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover {
          opacity:0.4
        },
        .card:focus,
        .card:active {
          color: #0070f3;
        }
        .card noteCover: hover{
          opacity:0.4
        }
        .card h3 {
          margin: auto;
          font-size: 1.8rem;

          
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
