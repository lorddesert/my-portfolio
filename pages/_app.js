import { ChakraProvider } from '@chakra-ui/provider'
import Layout from '../components/layouts/main'

const Website = ({ Component, pageProps, router, }) => {
    return (
        <ChakraProvider>
            <Layout>
                <Component {...pageProps} key={router.route}/>
            </Layout>
        </ChakraProvider>
    )
}

export default Website
