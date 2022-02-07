import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

import {
 FormControl,
 FormLabel,
 Heading,
 Button,
 Input,
 Textarea,
 Box
} from '@chakra-ui/react'
import Paragraph from './paragraph'

export default function ContactForm() {
 const [state, handleSubmit] = useForm('xknkgvlo')

 if (state.succeeded) {
  return (
   <>
    <Heading as="h4" fontSize={24}>
     ¡Gracias!
    </Heading>
    <Paragraph>Pronto voy a estar respondiendo tu mensaje.</Paragraph>
   </>
  )
 }

 return (
  <form onSubmit={handleSubmit}>
   {/* <Box border="2px" borderRadius="md" borderColor="teal.700" px={4} py={8}> */}
   <Box p={3}>
    <FormControl isRequired>
     <FormLabel htmlFor="email">Email</FormLabel>
     <Input
      focusBorderColor="teal.700"
      id="email"
      size="md"
      variant="filled"
      type="email"
      name="email"
      my={4}
     />
     <ValidationError prefix="Email" field="email" errors={state.errors} />
     <FormLabel htmlFor="message">Mensaje</FormLabel>
     <Textarea
      focusBorderColor="teal.700"
      id="message"
      name="message"
      variant="filled"
      my={4}
     />
     <ValidationError prefix="Mensaje" field="message" errors={state.errors} />
     <Button
      type="submit"
      disabled={state.submitting}
      my={4}
      //  variant="outline"
      colorScheme="teal"
     >
      Enviar mensaje
     </Button>
    </FormControl>
   </Box>
  </form>
 )
}
