import {server} from '../config'
import Head from 'next/head'
//this is used for custom titles or meta tags, keywords, etc
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  // console.log(articles)
  return (
    <div>
      <Head>
        <title>WebDeb Newz</title>
        <meta name='keywords' content='web development, programming' />
      </Head>

      <ArticleList articles={articles}/>
    </div>
  )
}

/*Props way
export default function Home(props) {
  // console.log(articles)
  return (
    <div>
      <Head>
        <title>WebDeb Newz</title>
        <meta name='keywords' content='web development, programming' />
      </Head>

      <ArticleList articles={props.articles}/>
    </div>
  )
}
*/

//Data fetching functions can be written above or below a component.
//async is for await
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }

// dotenv kind of method
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}