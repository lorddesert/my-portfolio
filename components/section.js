import { motion } from 'framer-motion'
import { chakra, shouldFowardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
 shouldFowardProp: prop => {
  return shouldFowardProp(prop) || props === 'transition'
 }
})

const Section = ({ children, delay = 0, id }) => {
 return (
  <StyledDiv
   initial={{ y: 10, opacity: 0 }}
   animate={{ y: 0, opacity: 1 }}
   transition={{ duration: 0.8, delay }}
   mb={6}
   id={id}
  >
   {children}
  </StyledDiv>
 )
}

export default Section
