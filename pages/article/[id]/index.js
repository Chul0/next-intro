import {server} from '../../../config'
//this is going to be a single id page
import Link from 'next/link'
import { useRouter } from "next/router" 
import Meta from '../../../components/Meta'

//to make id

const article = ({article}) => {
    //opiton 1
    // const router = useRouter()  //set router
    // const {id} = router.query //destructure it
    //^This can be used to get an {id}
    return(
        <>
        <Meta title={article.title} description={article.excerpt}/>
         {/* Set the title prop , it is parsed into Meta.js */}
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href='/'>Go Back</Link>
        </>
    ) 
}

//option 2
/*
export const getServerSideProps = async (context) => {
    //context parameter is an object containing keys such as res, params, req, etc.
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}
*/

//option 3
/*
export const getStaticProps = async (context) => {
    //context parameter is an object containing keys such as res, params, req, etc.
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const articles = await res.json()

    const ids = articles.map(article => article.id)
    //store each id to an array
    const paths = ids.map(id => ({params: {id: id.toString()}}))
    
    //return an Object with params, return an id key, the value is stringified id.
    return {
        paths,
        fallback: false //if the user goes to params that doesn't exist it will print 404 page
    }
}
*/

//NODE_ENV method
export const getStaticProps = async (context) => {
    //context parameter is an object containing keys such as res, params, req, etc.
    const res = await fetch(`${server}/api/articles/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json()
    
    const ids = articles.map(article => article.id)
    
    //store each id to an array
    const paths = ids.map(id => ({params: {id: id.toString()}}))
    //return an Object with params, return an id key, the value is stringified id.
    return {
        paths,
        fallback: false //if the user goes to params that doesn't exist it will print 404 page
    }
}



export default article