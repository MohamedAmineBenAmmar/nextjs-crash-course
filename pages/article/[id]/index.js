import { server } from '@/config'
import Meta from '@/components/Meta'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function article({ article }) {
    const router = useRouter()
    const { id } = router.query
    console.log("Extracted query parameter: ", id)
    // We can use that ID in fetch in use effect to get the related data related to that article

    return (
        <>
            <Meta title={article.title} description={article.excerpt} />
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
            <br />
            <Link href="/">Go Back</Link>
        </>
    )
}

// Method 1
// We will use get server side props which will fetch data at the time of request rather then get static props that get the data at build time
// Each time we visit the specific article page the data is being fetched
// export const getServersideProps = async (context) => {
//     // The context allow us to get the paramater that is in the URL
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()
//     return {
//         props: {
//             article
//         }
//     }
// }

// Method 2 (Fetching from the third party API)
// We can use a combination of get static props and get static paths to dynamically generate the paths with the data
// export const getStaticProps = async (context) => {
//     // The context allow us to get the paramater that is in the URL
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()
//     return {
//         props: {
//             article
//         }
//     }
// }

// We need the get static paths to tell next.js which paths we want to pre-render
// Doing it that way will make much faster because we are not fetching the data at the time of request
// Fetched at build time
// We use this technique to buid static website
// export const getStaticPaths = async () => {
//     // 1- Make a request to get all of the posts
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const article = await res.json()

//     // 2- Return a paths object
//     const ids = article.map(article => article.id) // Array of the article ids
//     const paths = ids.map(id => ({ params: { id: id.toString() } })) // Array of objects that have the params object with the id property
//     return {
//         paths,
//         fallback: false // If the page is not found it will show 404 page

//     }
// }

// Fetching from the local develped API
export const getStaticProps = async (context) => {
    // The context allow us to get the paramater that is in the URL
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json()
    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    // 1- Make a request to get all of the posts
    const res = await fetch(`${server}/api/articles`)
    const article = await res.json()

    // 2- Return a paths object
    const ids = article.map(article => article.id) // Array of the article ids
    const paths = ids.map(id => ({ params: { id: id.toString() } })) // Array of objects that have the params object with the id property
    return {
        paths,
        fallback: false // If the page is not found it will show 404 page

    }
}