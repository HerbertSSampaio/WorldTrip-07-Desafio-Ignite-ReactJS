import { Header } from "../components/Header";
import Head from 'next/head';
import { Flex, Heading, Box, Text, Wrap, WrapItem, Image } from "@chakra-ui/react";

export default function SouthAmerica() {
    return (
        <>
            <Head>
                <title>América do Sul | WorldTrip</title>
            </Head>
            <Header continentPage={true}/>
            <Flex backgroundImage="url('/continents/continentsouthamerica.png')" bgSize={["contain", "cover"]} height={["130", "500"]} flexDir="column" align={["center", "end"]} justify={["center", "flex-end"]}>
                <Heading position="relative" color='#F5F8FA' fontSize={["28", "48px"]} fontWeight="600" mb={["0", "35px"]} ml={["0", "140"]}>América do Sul</Heading>
            </Flex>
            <Flex justify="space-between" flexDir={["column", "row"]} pb={["0", "2rem"]} pt={["1rem", "4rem"]} px={["1.5rem", "7rem"]}>
                <Box flex="50%">
                    <Text fontWeight="400" color="#47585B" fontSize={["14px", "24px"]} textAlign="justify">
                    A América do Sul está localizada em grande parte no hemisfério sul, na zona intertropical ocidental.
                    A América do Sul abrange um território de 18 milhões de quilômetros quadrados e é banhada a leste pelo oceano Atlântico,
                    a oeste pelo oceano Pacífico e ao norte pelo mar das Antilhas, conhecido como do Caribe.
                    </Text>
                </Box>
                <Flex py={["10px", "0"]} justify={["space-between", "space-evenly"]} alignItems={["left", "center"]} flex="50%">
                    <Flex flexDir="column" align={["left", "center"]}>
                        <Heading color="#FFBA08" fontSize={["24", "48"]} fontWeight="600">12</Heading>
                        <Text color="#47585B" fontSize={["18", "24"]} fontWeight={["400", "600"]}>países</Text>
                    </Flex>
                    <Flex flexDir="column" align={["left", "center"]}>
                        <Heading color="#FFBA08" fontSize={["24", "48"]} fontWeight="600">9</Heading>
                        <Text color="#47585B" fontSize={["18", "24"]} fontWeight={["400", "600"]}>línguas</Text>
                    </Flex>
                    <Flex flexDir="column" align={["left", "center"]}>
                        <Heading color="#FFBA08" fontSize={["24", "48"]} fontWeight="600">27</Heading>
                        <Text color="#47585B" fontSize={["18", "24"]} fontWeight={["400", "600"]}>cidades +100</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Box px={["2rem", "7rem"]}>
                <Heading py={["1rem", "2rem"]}>Cidades +100</Heading>
                <Wrap spacing={"35px"}>
                    <WrapItem width={["100%", "auto"]}>
                        <Box w="256px" mx="auto">
                            <Image src="/citys/riodejaneiro.png" />
                            <Flex 
                                justify="space-between"
                                align="center"
                                px="5"
                                py="8"
                                borderRadius="1"
                                borderX="1px"
                                borderBottom="1px"
                                borderColor="rgb(255 186 8 / 50%)"
                            >
                                <Box>
                                    <Heading
                                        fontFamily="Barlow"
                                        fontSize="1.25rem" 
                                        fontWeight="600" 
                                        color="#47585B"
                                    >
                                        Rio de Janeiro
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        Brasil
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/brasil.svg" width="30px" height="30px"/>
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem width={["100%", "auto"]}>
                        <Box w="256px" mx="auto">
                            <Image src="/citys/buenosaires.png" />
                            <Flex 
                                justify="space-between"
                                align="center"
                                px="5"
                                py="8"
                                borderRadius="1"
                                borderX="1px"
                                borderBottom="1px"
                                borderColor="rgb(255 186 8 / 50%)"
                            >
                                <Box>
                                    <Heading
                                        fontFamily="Barlow"
                                        fontSize="1.25rem" 
                                        fontWeight="600" 
                                        color="#47585B"
                                    >
                                        Buenos Aires
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        Argentina
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/argentina.svg" width="30px" height="30px"/>
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem width={["100%", "auto"]}>
                        <Box w="256px" mx="auto">
                            <Image src="/citys/santiago.png" />
                            <Flex 
                                justify="space-between"
                                align="center"
                                px="5"
                                py="8"
                                borderRadius="1"
                                borderX="1px"
                                borderBottom="1px"
                                borderColor="rgb(255 186 8 / 50%)"
                            >
                                <Box>
                                    <Heading
                                        fontFamily="Barlow"
                                        fontSize="1.25rem" 
                                        fontWeight="600" 
                                        color="#47585B"
                                    >
                                        Santiago
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        Chile
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/chile.svg" width="30px" height="30px"/>
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem width={["100%", "auto"]}>
                        <Box w="256px" mx="auto">
                            <Image src="/citys/machu.png" />
                            <Flex 
                                justify="space-between"
                                align="center"
                                px="5"
                                py="8"
                                borderRadius="1"
                                borderX="1px"
                                borderBottom="1px"
                                borderColor="rgb(255 186 8 / 50%)"
                            >
                                <Box>
                                    <Heading
                                        fontFamily="Barlow"
                                        fontSize="1.25rem" 
                                        fontWeight="600" 
                                        color="#47585B"
                                    >
                                        Machu Picchu
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        Peru
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/peru.svg" width="30px" height="30px"/>
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem width={["100%", "auto"]}>
                        <Box w="256px" mx="auto">
                            <Image src="/citys/fozdoiguacu.png" />
                            <Flex 
                                justify="space-between"
                                align="center"
                                px="5"
                                py="8"
                                borderRadius="1"
                                borderX="1px"
                                borderBottom="1px"
                                borderColor="rgb(255 186 8 / 50%)"
                            >
                                <Box>
                                    <Heading
                                        fontFamily="Barlow"
                                        fontSize="1.25rem" 
                                        fontWeight="600" 
                                        color="#47585B"
                                    >
                                        Foz do Iguaçu
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        Brasil
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/brasil.svg" width="30px" height="30px"/>
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                </Wrap>
            </Box>
        </>
    );
};