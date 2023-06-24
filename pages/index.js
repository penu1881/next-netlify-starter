import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>PENU Official Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="PENU" />
        <p className="description">
          Mustafa Akbulut
        </p>
      </main>

      <Footer />
    </div>
  )
}
