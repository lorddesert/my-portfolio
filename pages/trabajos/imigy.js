import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'

import P from '../../components/paragraph'

import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Search'n Rock" desc="Imigy por dentro. Como esta hecho la aplicacion">
            <Container>
                <Title>
                    Imigy <Badge>2021 - Presente</Badge>
                </Title>
                <P>Aplicacion web minimalista para compartir fotos y screenshots con nuestros amigos hecho con Svelte.</P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://imigy.vercel.app">
                        https://imigy.vercel.app
                        <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <Meta>Plataforma</Meta>
                    <span>Web</span>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Svelte, Bulma CSS, Firebase, Figma</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/imigy.png" />
                <WorkImage src="/images/imigy-2.png" />
                <WorkImage src="/images/imigy-3.png" />
            </Container>
        </Layout>
    )
}

export default Work