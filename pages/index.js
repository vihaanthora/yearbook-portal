import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yearbook Portal | IITISoC'22</title>
        <meta name="description" content="Yearbook portal project for IITISoC'22" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
   

       
       
      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to <a href="#">Yearbook Portal!</a>
        </h1>


       
        
      </main>
     
      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
         CONTACT US
          
        </a>


      </footer>
    </div>
  )
}
