import React from 'react'
import {Box,Button,Heading,HStack,Input,Stack, VStack,Text} from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'
export default function Footer() {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <Box bg={'blackAlpha.900'} minH={'40'} p="16" color={"white"}>
        <Stack direction={['column','row']} >
            <VStack alignItems="strtch" w="full" px={'4'}>
                <Heading size={"md"} textTransform={"uppercase"} textAlign={["center",'left']}>
                    Subscribe to get update
                </Heading>
                <HStack borderBottom={"2px solid white"} py="2">
                    <Input placeholder='Enter Email Here' border={"none"} borderRadius="none" outline={"none"} focusBorderColor="none" />
                    <Button p="0" color={"purple"} variant="ghost" borderRadius={"0 20px"}>
                        <AiOutlineSend size={"20"}/>
                    </Button>
                </HStack>
            </VStack>
            <VStack  w="full" borderLeft={["none","1px solid white"]} borderRight={["none","1px solid white"]}>
                <Heading textTransform={"uppercase"} textAlign="center">
                    VIDEO HUB
                </Heading>
                <Text>All rights received</Text>
            </VStack>
            <VStack w={"full"}>
                <Heading size={"md"} textTransform="uppercase">
                    Social media
                </Heading>
                <Button variant={"link"} colorScheme="whiteAlpha">
                    <a target={"blank"} href='https://youtube.com'>Youtube</a>
                </Button>
                <Button variant={"link"} colorScheme="whiteAlpha">
                    <a target={"blank"} href='https://Instagram.com/shubham_c_s'>Instagram</a>
                </Button>
                <Button variant={"link"} colorScheme="whiteAlpha">
                    <a target={"blank"} href='https://github.com'>GitHub</a>
                </Button>
            </VStack>

        </Stack>
    </Box>
  )
}
