import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import postThumbnail from '../public/images/orion-solar.jpg'

const Posts = () => {
 return (
  <Layout title="Posts">
   <Container>
    <Heading as="h3" fontSize={20} mb={4}>
     Posts populares?
    </Heading>
   </Container>
   <Section delay={0.1}>
    <SimpleGrid columns={[1, 2, 2]} gap={6}>
     <GridItem
      title="Titulo del post"
      thumbnail={postThumbnail}
      href="/home"
     ></GridItem>
    </SimpleGrid>
   </Section>
  </Layout>
 )
}

export default Posts
