import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children }) => {
 return (
  <Box as="main" pb={8}>
   <Head>
    <meta charset="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Music === Code." />
    <link rel="icon" type="image/x-icon" href="/images/logo.png" />
    <title>Lorddesert&apos;s house.</title>
   </Head>

   <Container maxW="container.md" pt={14}>
       {children}
   </Container>
  </Box>
 )
}

export default Main