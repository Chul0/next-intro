import Head from 'next/head'
//this is used for custom titles or meta tags, keywords, etc

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebDeb Newz</title>
        <meta name='keywords' content='web development, programming' />
      </Head>


      <h1>Welcome to Next</h1>
    </div>
  )
}
