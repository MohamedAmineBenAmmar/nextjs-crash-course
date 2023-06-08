import { server } from '@/config'
import Meta from '@/components/Meta'
import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  return (
    <>      
      <ArticleList articles={articles} />
    </>
  )
}

// Example of data fetching
// 1- get static props fetch data at build time
// 2- get server side props fetch data on every request (more slower)
// 3- get static path to dynamically generate paths based on the data that we are fetching

// Calling the 3rd party API example
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }

// Calling the local API example
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}