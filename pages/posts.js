import CardPost from '@components/CardPost'
import Container from '@components/Container'
import Layout from '@components/Layout'
import SectionHeader from '@components/SectionHeader'
import { useState } from 'react'
import mockPosts from 'utilities/posts.json'
import Head from 'next/head'

export default function Posts() {

   const [post, setPost] = useState(mockPosts);

   return (
      <Layout>
         <Head>
            <title>Posts &mdash; Epictetus</title>
         </Head>
         <Container>
            <SectionHeader>ui design</SectionHeader>

            {post.length < 1 ? (
               <div className="text-center py-10">
                  <h2 className="text-6xl">No result 😥</h2>
                  <p className="text-xl mt-6 text-white/60 mx-auto md:w-7/12 w-full">We couldn’t find any posts with the keyword `yahahahayuk`. Please try another keyword.</p>
               </div>
            ) : (
               <div className="flex flex-wrap -mx-4">
                  {post.map((posts) => (
                     <div className="md:w-4/12 w-full px-4" key={posts.id}>
                        <CardPost {...posts} />
                     </div>
                  ))}
               </div>
            )}


         </Container>
      </Layout>
   );
}