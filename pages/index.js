import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja list | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio dicta autem enim sint sit quasi fugit. Consequatur, nulla aperiam. Consectetur magni molestiae quaerat quas vitae? Eum repellendus earum labore laboriosam.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi esse dignissimos nobis. Iusto modi ducimus temporibus natus voluptate voluptatibus consectetur esse sequi quaerat. Ratione minima nulla enim! Quas, sed facilis.</p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See ninja listing</a>
        </Link>
      </div>
    </>
  )
}
