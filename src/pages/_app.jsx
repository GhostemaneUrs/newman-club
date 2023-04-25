import Head from 'next/head'
import '@/styles/globals.scss'
import { Layout } from '@/components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Newman Club</title>
        <link rel='icon' href='/logo.svg' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
