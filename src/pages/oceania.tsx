import { Header } from "../components/Header";
import Head from 'next/head';
import { Flex, Heading, Box, Text, Wrap, WrapItem, Image } from "@chakra-ui/react";

export default function Oceania() {
    return (
        <>
            <Head>
                <title>Oceania | WorldTrip</title>
            </Head>
            <Header continentPage={true}/>
            <Flex backgroundImage="url('/continents/continentoceania.jpg')" bgSize={["contain", "cover"]} height={["130", "500"]} flexDir="column" align={["center", "end"]} justify={["center", "flex-end"]}>
                <Heading position="relative" color='#F5F8FA' fontSize={["28", "48px"]} fontWeight="600" mb={["0", "350px"]} ml={["0", "140"]}>Oceania</Heading>
            </Flex>
            <Flex justify="space-between" flexDir={["column", "row"]} pb={["0", "2rem"]} pt={["1rem", "4rem"]} px={["1.5rem", "7rem"]}>
                <Box flex="50%">
                    <Text fontWeight="400" color="#47585B" fontSize={["14px", "24px"]} textAlign="justify">
                    O continente mais isolado do mundo é composto pela Austrália, Nova Zelândia e Papua Nova Guiné.
                    Sua configuração corresponde a um enorme arquipélago, com formação derivada de erupções vulcânicas.
                    É cercado pelo Oceano Índico a oeste e Pacífico a norte, leste e sul.
                    </Text>
                </Box>
                <Flex py={["10px", "0"]} justify={["space-between", "space-evenly"]} alignItems={["left", "center"]} flex="50%">
                    <Flex flexDir="column" align={["left", "center"]}>
                        <Heading color="#FFBA08" fontSize={["24", "48"]} fontWeight="600">14</Heading>
                        <Text color="#47585B" fontSize={["18", "24"]} fontWeight={["400", "600"]}>países</Text>
                    </Flex>
                    <Flex flexDir="column" align={["left", "center"]}>
                        <Heading color="#FFBA08" fontSize={["24", "48"]} fontWeight="600">2000</Heading>
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
                            <Image src="/citys/sydney.png" />
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
                                        Sydney
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        Australia
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/australia.svg" width="30px" height="30px"/>
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem width={["100%", "auto"]}>
                        <Box w="256px" mx="auto">
                            <Image src="/citys/auckland.png" />
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
                                        Auckland
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        Nova Zelândia
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/novazelandia.svg" width="30px" height="30px"/>
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem width={["100%", "auto"]}>
                        <Box w="256px" mx="auto">
                            <Image src="/citys/queenstown.png" />
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
                                        Queenstown
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        Nova Zelândia
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/novazelandia.svg" width="30px" height="30px"/>
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem width={["100%", "auto"]}>
                        <Box w="256px" mx="auto">
                            <Image src="/citys/melbourne.png" />
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
                                        Melbourne
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        Australia
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/australia.svg" width="30px" height="30px"/>
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem width={["100%", "auto"]}>
                        <Box w="256px" mx="auto">
                            <Image src="/citys/brisbane.png" />
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
                                        Brisbane
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        Australia
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/australia.svg" width="30px" height="30px"/>
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                </Wrap>
            </Box>
        </>
    );
};