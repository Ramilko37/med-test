import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainPageContent from "../containers/mainpage";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta  name="viewport"
               content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="Description" content="Put your description here."/>
        <title>Medical test page</title>
      </Head>

      <main className={styles.main}>
          <MainPageContent />


      </main>
    </div>
  )
}

export default Home
