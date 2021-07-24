import Head from 'next/head'
import QRCode from 'react-qr-code'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>대영펌프</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <QRCode className={styles.qrcode} value="http://3.35.235.144:7000/pmp/1" size={100} />
      </main>
    </div>
  )
}
