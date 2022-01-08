import Head from 'next/head'
import FeaturedPost from '@components/FeaturedPost'
import CardPost from '@components/CardPost'
import Container from '@components/Container'
import Layout from '@components/Layout'
import { useState } from 'react'
import mockPosts from 'utilities/posts.json'

export default function Home() {

   const [post, setPost] = useState(mockPosts);

   return (
      <Layout>
         <Head>
            <title>Home &mdash; Epictetus</title>
         </Head>
         <Container>
            <FeaturedPost />
            <div className="flex flex-wrap -mx-4">
               {post.map((posts) => (
                  <div className="md:w-4/12 w-full px-4" key={posts.id}>
                     <CardPost {...posts} />
                  </div>
               ))}
            </div>
         </Container>
      </Layout>
   )
}
