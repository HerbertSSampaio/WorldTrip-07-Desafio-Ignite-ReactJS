import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";
import { Divider, Box, Center, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      {/* <Divider variant="solid" bg="#47585B" w="90px" h="2px" m="auto"/>
      <Box as="main" py="20">
        <Center>
          <Heading textAlign="center">
            Vamos nessa? <br></br>Então escolha seu continente
          </Heading>
        </Center>
      </Box> */}
    </>
  )
}
