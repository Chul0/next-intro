import Layout from '../components/layout'
import '../styles/globals.css'
//global.css should be only imported to app.js

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} /> {/* every page */}
    </Layout>
  )
}

export default MyApp
