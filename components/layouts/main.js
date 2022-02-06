import Head from 'next/head'
import Navbar from '../navbar'
import NoSsr from '../no-ssr'
import { Box, Container } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import VoxelModel from '../voxel-model'

const Main = ({ children }) => {
 const router = useRouter()
 return (
  <Box as="main" pb={8}>
   <Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="robots" content="index,follow" />
    <meta name="googlebot" content="index,follow" />
    <link rel="icon" type="image/x-icon" href="/images/logo.png" />
    <meta name="description" content="Front end DEV, UI Designer" />
    <title>Sacha Nocetto - Home</title>
   </Head>

   <Navbar path={router.asPath} />

   <Container maxW="container.md" pt={14}>
    <NoSsr>
     <VoxelModel />
    </NoSsr>
    {children}
   </Container>
  </Box>
 )
}

export default Main
