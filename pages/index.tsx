import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ReviewForm } from '../components/review-form.component'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Review form</title>
        <meta name="description" content="My super app review form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ReviewForm />
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Home
