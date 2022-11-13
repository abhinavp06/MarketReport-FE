import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainInputComponent from '../components/MainInputComponent';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Market Report Generator | Abhinav Parashar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my <a href={process.env.NEXT_PUBLIC_marketReportGeneratorGithub} target='_blank' rel="noreferrer">Market Report Generator</a>
        </h1>

        <MainInputComponent/>

      </main>

      <footer className={styles.footer}>
        <a
          href={process.env.NEXT_PUBLIC_linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          Abhinav Parashar
        </a>
      </footer>
    </div>
  )
}
