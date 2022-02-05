import NextLink from 'next/link'
import { Box, Heading, Container, Text, Divider, Button } from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">No se encontro</Heading>
            <Text>La pagina que estas buscando no se encontro :C.</Text>
            <Divider my={6} />
            <Box my={6} align="center">
                <NextLink href="/"> 
                <Button colorScheme="teal">Volver al inicio</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound
 