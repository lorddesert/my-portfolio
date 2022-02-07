import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

import {
 FormControl,
 FormLabel,
 FormErrorMessage,
 FormHelperText,
 Heading,
 Button,
 Input,
 Textarea
} from '@chakra-ui/react'
import Paragraph from './paragraph'

export default function ContactForm() {
 const [state, handleSubmit] = useForm('xknkgvlo')

 if (state.succeeded) {
  return (
   <>
    <Heading as="h4" fontSize={24} >¡Gracias!</Heading>
    <Paragraph>Pronto voy a estar respondiendo tu mensaje.</Paragraph>
   </>
  )
 }

 return (
  <form onSubmit={handleSubmit}>
   <FormControl isRequired>
    <FormLabel htmlFor="email">Email</FormLabel>
    <Input id="email" type="email" name="email" my={4} />
    <ValidationError prefix="Email" field="email" errors={state.errors} />
    <FormLabel htmlFor="message">Mensaje</FormLabel>
    <Textarea id="message" name="message" my={4} />
    <ValidationError prefix="Mensaje" field="message" errors={state.errors} />
    <Button
     type="submit"
     disabled={state.submitting}
     my={4}
     variant="outline"
     colorScheme="teal"
    >
     Enviar mensaje
    </Button>
   </FormControl>
  </form>
 )
}
