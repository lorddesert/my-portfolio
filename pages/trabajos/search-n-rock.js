import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'

import P from '../../components/paragraph'

import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Search'n Rock">
            <Container>
                <Title>
                    Search n&apos; Rock <Badge>2019</Badge>

                </Title>
                <P>Aplicacion web (challenge tecnico). Busca información sobre tus bandas de Rock favoritas.</P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://lorddesert.github.io/search-n-rock/">
                        https://lorddesert.github.io/search-n-rock/
                        <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Diseño y Prototipado</Meta>
                        <Link href="https://www.figma.com/file/GrFnbkDpLtcfu4KGguiQgS/Search-n'-rock?node-id=0%3A1">
                        Figma
                        <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <Meta>Plataforma</Meta>
                    <span>Web</span>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React.js, Firebase, CRUD API, Figma</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/search-n-rock.png" />
                <WorkImage src="/images/search-n-rock-2.png" />
                <WorkImage src="/images/search-n-rock-3.png" />
            </Container>
        </Layout>
    )
}

export default Work