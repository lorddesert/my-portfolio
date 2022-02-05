import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import logoImg from '../public/images/logo.png'

const LogoBox = styled.span`
 font-weight: bold;
 font-size: 24px;
 display: inline-flex;
 align-items: center;
 height: 30px;
 line-height: 20px;
 padding: 10px;
 img {
   transition: all ease-in-out 150ms;

 }
 &:hover img {
  transform: rotate(25deg) scale(1.1, 1.1);
 }
`

const Logo = () => {
//  const logoImg = '/images/logo.png'
 return (
  <Link href='/'>
    <LogoBox>
     <Image src={logoImg} width={30} height={30} alt="logo"></Image>
     <Text
      color={useColorModeValue('gray.800', 'whiteAlpha.900')}
      fontFamily="'M PLUS Rounded 1c', sans-serif"
      fontWeight="bold"
      ml={3}
     >
      Sacha Nocetto
     </Text>
    </LogoBox>
  </Link>
 )
}

export default Logo
