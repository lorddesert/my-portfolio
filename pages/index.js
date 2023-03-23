import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import ContactForm from '../components/contact-form'

import {
 Box,
 Button,
 Heading,
 Container,
 Image,
 useColorModeValue,
 Link,
 ListItem,
 List,
 Icon
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'

const Page = () => {
 return (
  <Layout>
   <Container className="bio">
    <Box
     borderRadius="lg"
     bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
     p={3}
     mb={6}
    >
     Hola, Soy Front end Developer y UI designer en Argentina!
    </Box>
    <Box display={{ md: 'flex' }}>
     <Box flexGrow={1}>
      <Heading>Sacha Nocetto</Heading>
      <p>Front end dev</p>
     </Box>
     <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
      <Image
       borderColor="whiteAlpha.800"
       borderWidth={2}
       borderStyle="solid"
       maxWidth="100px"
       display="inline-block"
       borderRadius="full"
       src="/images/logo.png"
       alt="Imagen de perfil"
      />
     </Box>
    </Box>

    <Section delay={0.1}>
     <Heading as="h3" variant="section-title">
      Quien soy
     </Heading>
     <Paragraph>
      {"Software Engineer y amante de la musica, tengo 3 años de experiencia y me especializo en Front end. Trabajo principalmente con React pero amo Svelte <3."}
      <NextLink href="/trabajos/imigy">
       <Link>Imigy</Link>
      </NextLink>
      .{' '}
     </Paragraph>
     <Box align="center" my={4}>
      <NextLink href="/trabajos">
       <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
        Portafolio
       </Button>
      </NextLink>
     </Box>
    </Section>

    <Section delay={0.2}>
     <Heading as="h3" variant="section-title">
      Bio
     </Heading>
     <BioSection>
      <BioYear>Abril 2020 - Julio 2021</BioYear>
      Front end developer en
      <NextLink href="https://quartex.net">
       <Link> Quartex.net</Link>
      </NextLink>
     </BioSection>
     <BioSection>
      <BioYear>Julio 2021 - Presente</BioYear>
      Front end developer Freelance
     </BioSection>
    </Section>

    <Section delay={0.2}>
     <Heading as="h3" variant="section-title">
        Q&A
     </Heading>
     <BioSection>
      <BioYear>Q: ¿Donde te gustaria trabajar?</BioYear>
      <BioYear>A: En un equipo que se preocupa por las personas que usarán su producto.</BioYear>
      </BioSection>
     <BioSection>
      <BioYear>Q: ¿Cuales son tus objetivos?</BioYear>
      <BioYear>A: Especializarme en desarrollo web y JavaScript.</BioYear>
      </BioSection>
     <BioSection>
      <BioYear>Q: ¿Que otras areas/skills te gustaria desarrollar?</BioYear>
      <BioYear>A: Cloud, machine learning y inteligencia artificial.</BioYear>
      </BioSection>
    </Section>

    <Section>
     <Heading as="h3" variant="section-title">
      I ❤
     </Heading>
     Musica, Videojuegos, Escribir, Programar, Crear, Tecnologia.
    </Section>
    <Section delay={0.3}>
     <Heading as="h3" variant="section-title">
      Mis redes
     </Heading>
     <List>
      <ListItem>
       <Link href="https://github.com/lorddesert" target="_blank">
        <Button
         variant="ghost"
         colorScheme="teal"
         leftIcon={<Icon as={IoLogoGithub} />}
        >
         @lorddesert
        </Button>
       </Link>
      </ListItem>
      <ListItem>
       <Link href="https://twitter.com/lorddesert" target="_blank">
        <Button
         variant="ghost"
         colorScheme="teal"
         leftIcon={<Icon as={IoLogoTwitter} />}
        >
         @lorddesert
        </Button>
       </Link>
      </ListItem>
     </List>
    </Section>
    <Section delay={0.4} id="contacto">
     <Heading as="h3" variant="section-title">
      Contacto
     </Heading>
     <ContactForm />
    </Section>
    <span>
     Gracias a <Link href="https://github.com/craftzdog">@craftzdog</Link> and{' '}
     <Link href="https://sketchfab.com/ini_andri">ini_andri</Link>
    </span>
   </Container>
  </Layout>
 )

 {
  /* <p>Soy un desarrollador web y diseñador UI con 2 años de experiencia, siempre buscando algo nuevo que aprender. Me gusta participar tanto en el prototipado de un diseño como el en desarrollo del producto. Cuando no trabajo me gusta escuchar musica y jugar videojuegos.</p>
        <button>Mis trabajos</button>
    </section>


    <section>
        <h2>Experiencia</h2>
        <ul>
            <li>
                <h3>Front end developer - Freelance</h3>
                <small>Julio 2021 - Presente</small>
                <p>Diseño y desarrollo de sitios web y aplicaciones. Diseño de identidad (logos) </p>
                <h4>Tecnologias</h4>
                <ul>
                    <li>tecnologia</li>
                    <li>tecnologia</li>
                    <li>tecnologia</li>
                    <li>tecnologia</li>
                </ul>

                <ul>
                    <li>
                        <span>Ejemplo</span>
                    </li>
                    <li>
                        <span>Ejemplo</span>
                    </li>
                    <li>
                        <span>Ejemplo</span>
                    </li>
                </ul>
                
            </li>
            <li>
                <h3>Front end developer - Quartex.net</h3>
                <small>Abril 2020 - Julio 2021</small>
                <p>Auditoria y mejora de nuevas implementaciones a la interfaz de usuario asegurando la calidad y la accesibilidad del sitio. </p>
                <h4>Tecnologias</h4>
                <ul>
                    <li>PhP</li>
                    <li>SQL</li>
                    <li>Figma</li>
                    <li>JavaScript</li>
                </ul>
                <ul>
                    <li>
                        <span>Ejemplo</span>
                    </li>
                    <li>
                        <span>Ejemplo</span>
                    </li>
                    <li>
                        <span>Ejemplo</span>
                    </li>
                </ul>  
            </li>
        </ul>
    </section>

    <section>
        <h2>Mi trabajo</h2>
        <ul>
            <li>
                <h3>Front end developer - Quartex.net</h3>
                <small>Abril 2020 - Julio 2021</small>
                <p>Auditoria y mejora de nuevas implementaciones a la interfaz de usuario asegurando la calidad y la accesibilidad de la plataforma. </p>
                <span>Imagen</span>
                <h4>Tecnologias</h4>
                <ul>
                    <li>tecnologia</li>
                    <li>tecnologia</li>
                    <li>tecnologia</li>
                    <li>tecnologia</li>
                </ul>
            </li>
            <li>
                <h3>Front end developer - Quartex.net</h3>
                <small>Abril 2020 - Julio 2021</small>
                <h4>Tecnologias</h4>
                <ul>
                    <li>tecnologia</li>
                    <li>tecnologia</li>
                    <li>tecnologia</li>
                    <li>tecnologia</li>
                </ul>
                <ul>
                    <li>
                        <span>Ejemplo</span>
                    </li>
                    <li>
                        <span>Ejemplo</span>
                    </li>
                    <li>
                        <span>Ejemplo</span>
                    </li>
                </ul>  
            </li>
        </ul>
    </section>

    <section className="snippets">
        <h2>Mis ultimos snippets</h2>
        <ul>
            <li><a href="github.com/lorddeser/imigy">Sesion del locro</a></li>
            <li><a href="github.com/lorddeser/imigy">Imigy</a></li>
            <li><a href="google.com">Tutorial</a></li>
        </ul>
    </section> 
    </>
    */
 }
}

export default Page
