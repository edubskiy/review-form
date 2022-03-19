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
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />

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
