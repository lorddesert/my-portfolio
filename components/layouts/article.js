import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'

const variants = {
 hidden: { opacity: 0, x: 0, y: 20 },
 enter: { opacity: 1, x: 0, y: 0 },
 exit: { opacity: 0, x: 0, y: 20 }
}

const Layout = ({ children, title, desc }) => {
 return <motion.article
  initial="hidden"
  animate="enter"
  exit="exit"
  variants={variants}
  transition={{ dutaion: 0.4, type: 'easeInOut' }}
  style={{ position: 'relative' }}
 >
     <>
     {title && ( <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <link rel="icon" type="image/x-icon" href="/images/logo.png" />
        <meta name="description" content={desc || "Creative Front end developer && UI Designer"} />
         <title>{title} - Sacha Nocetto</title>

     </Head>)}
     {children}
     <GridItemStyle />
     </>
 </motion.article>
}

export default Layout