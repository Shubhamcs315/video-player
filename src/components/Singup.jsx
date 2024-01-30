import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
function Singup() {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
        <form>
            <VStack alignItems={"stretch"} spacing={"8"} w={["full","96"]} m={"auto"} my={"16"}>
                <Heading>Video Media</Heading>
                <Avatar alignself={"center"}/>
                <Input placeholder='Name'  type={"text"} required focusBorderColor={'purple.500'}></Input>
                <Input placeholder='Email'  type={"email"} required focusBorderColor={'purple.500'}></Input>
                <Input placeholder='Password'  type={"password"} required focusBorderColor={'purple.500'}></Input>
                <Button colorScheme={"purple"} type={"submit"}>Sign Up</Button>
                <Text textAlign={"right"}>Aleready Signed Up? {" "}
                <Button  variant={"link"} colorScheme={"purple"}>
                    <Link to={"/login"}>Log In</Link>
                </Button>
                </Text>
                
            </VStack>
        </form>
    </Container>
  )
}

export default Singup