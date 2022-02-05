import { ChakraProvider } from '@chakra-ui/provider'
import Layout from '../components/layouts/main'
import theme from '../libs/theme'

const Website = ({ Component, pageProps, router, }) => {
    return (
        <ChakraProvider theme={theme}>   
            <Layout>
                <Component {...pageProps} key={router.route}/>
            </Layout>
        </ChakraProvider>
    )
}

export default Website
 