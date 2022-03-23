import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ReviewBoard } from '../components/review-board/review-board.component';
import { ReviewComments } from '../components/review-comments/review-comments.component';
import { ReviewForm } from '../components/review-form/review-form.component';
import styles from '../styles/Home.module.css';
import { SizedBox } from './api/index.styles';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Review form</title>
        <meta name='description' content='My super app review form' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <ReviewForm />
        <SizedBox />
        <SizedBox />
        <ReviewBoard />
        <SizedBox />
        <SizedBox />
        <ReviewComments />
      </main>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
};

export default Home;
