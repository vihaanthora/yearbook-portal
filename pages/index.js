import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'



const Home=({products})=>{
  const alumniList=products.map(product=>{
    return(
      <div className="name" key={product._id}>
        <div>{product.name}</div>
        <div>{product.about}</div>
        <div>{product.department}</div>
        <div>{product.email}</div>
        <div>{product.roll}</div>

      </div>
    )
  })
  // console.log(products)
  


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

      <div>{alumniList}</div>

     
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
export async function getStaticProps(){
  const res=await fetch('http://localhost:3000/api/hello')
  const data=await res.json()
  return{
    props:{products:data}
  }
}
export default Home
