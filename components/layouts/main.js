import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const Main = ({ children}) => {
    const router = useRouter()
 return (
  <Box as="main" pb={8}>
   <Head>
    <meta charset="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Front end DEV, UI Designer" />
    <link rel="icon" type="image/x-icon" href="/images/logo.png" />
    <title>Sacha Nocetto - Home</title>
   </Head>

   <Navbar path={router.asPath} />

   <Container maxW="container.md" pt={14}>
       {children}
   </Container>
  </Box>
 )
}

export default Main