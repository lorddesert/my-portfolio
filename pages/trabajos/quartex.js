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
                    Quartex.net <Badge>2020 - 2021</Badge>
                </Title>
                <P>Plataforma/foro de tecnología.</P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://quartex.net">
                        Quartex.net
                        <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <Meta>Plataforma</Meta>
                    <span>Web</span>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>PhP, SQL, Wordpress, Figma</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/quartex-1.png" />
                <WorkImage src="/images/quartex-2.png" />
                <WorkImage src="/images/quartex-3.png" />
            </Container>
        </Layout>
    )
}

export default Work