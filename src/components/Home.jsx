import { Box, Container, Heading, Image, Stack, transform ,Text } from '@chakra-ui/react'
import React from 'react'
import{Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.jpg"
const headinoptions={
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,50%)",
    textTransform:"upercase",
    p:4,
    size:"4xl"
}
export default function Home() {
  return (
    <Box>
        <MyCarousel/>
        <Container maxW={"container.xl"} minH={"100vh"} p="16" m="auto">
            <Heading textTransform={"uppercase"} py="2"w={"fit-content"} m="auto" borderBottom={"2px solid"}>Services</Heading>
            <Stack h={"full"} p={"4"} alignItems={"center"}  direction={['column','row']}>
            <Image src={img5} h={[40,400]} filter={"hue-rotate(-130deg)"}/>
            <Text lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas totam deleniti temporibus fugiat ex, necessitatibus quam esse quos odit? Rerum debitis quasi, aliquam voluptatibus blanditiis similique consectetur temporibus odio vel?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum voluptates non neque dolor aperiam porro pariatur incidunt recusandae labore ut! Dolores eos aperiam, provident natus, omnis voluptates laboriosam nulla quia error atque alias ut, et voluptatibus molestias exercitationem! Odit enim iure repudiandae ad consequuntur deleniti nesciunt beatae illo consequatur commodi? Itaque iusto, id, obcaecati, officia ullam delectus culpa eaque vel rem quos totam beatae dicta dolore error quaerat ratione. Eligendi possimus esse exercitationem, quidem, pariatur non neque repellendus ipsa nesciunt labore id dolorum enim odio assumenda nemo alias cupiditate iste eos soluta. Dolor ipsa necessitatibus tempora, eveniet hic facilis ab.
            </Text>
        </Stack>
        </Container>
       
    </Box>
  )
}
const MyCarousel=()=>{
    return(
        <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false}>
        <Box w="full" h={'100vh'} >
            <Image src={img1} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headinoptions}>
                Watch The Future
            </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img2} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headinoptions}>
                Future Is Gaming
            </Heading>
        </Box>
        <Box w="full" h={'100vh'} >
            <Image src={img3} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headinoptions}>
                Gaming on Console
            </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img4} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headinoptions}>
                Night life is cool
            </Heading>
        </Box>
    </Carousel>
    )
}