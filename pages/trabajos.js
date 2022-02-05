import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbImigy from '../public/images/imigy.png'
import thumbQuartex from '../public/images/quartex.png'
import thumbSearchNRock from '../public/images/search-n-rock.png'

const Works = () => {
 return (
  <Layout>
   <Container>
    <Heading as="h3" fontSize={20} mb={4}>
     Trabajos
    </Heading>
    <SimpleGrid columns={[1, 1, 2]} gap={6}>
     <Section>
      <WorkGridItem id="quartex" title="Quartex.net" thumbnail={thumbQuartex}>
       Plataforma/foro de tecnología para expresarse libremente.
      </WorkGridItem>
     </Section>
    </SimpleGrid>
    <Heading as="h3" fontSize={20} my={4}>
     Proyectos
    </Heading>
    <SimpleGrid columns={[1, 1, 2]} gap={6}>
     <Section>
      <WorkGridItem id="imigy" title="Imigy" thumbnail={thumbImigy}>
       Aplicación para postear y compartir imagenes con tus amigos.
      </WorkGridItem>
     </Section>
     <Section>
      <WorkGridItem
       id="search-n-rock"
       title="Search n' rock"
       thumbnail={thumbSearchNRock}
      >
       Aplicación para buscar información sobre tus bandas de rock favoritas.
      </WorkGridItem>
     </Section>
    </SimpleGrid>
   </Container>
  </Layout>
 )
}

export default Works
