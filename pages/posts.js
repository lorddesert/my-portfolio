import { Container, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '../components/layouts/article'

const Posts = () => {
 return (
  <Layout title="Posts" desc="Posts/tutoriales de tecnologia">
   <Container>
    <Heading as="h2" fontSize={36} mb={4}>
     Proximamente...
    </Heading>
   </Container>
   {/* <Section delay={0.1}>
    <SimpleGrid columns={[1, 2, 2]} gap={6}>
     <GridItem
      title="Titulo del post"
      thumbnail={postThumbnail}
      href="/home"
     ></GridItem>
    </SimpleGrid>
   </Section> */}
  </Layout>
 )
}

export default Posts
