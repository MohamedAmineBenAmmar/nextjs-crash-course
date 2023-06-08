import Layout from '@/components/Layout'
// This where we import global css styles
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  // Component = page
  // pageProps = props to that page
  // Here we can create layout 
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
