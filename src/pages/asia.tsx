import { Header } from "../components/Header";
import Head from 'next/head';
import { Flex, Heading, Box, Text, Wrap, WrapItem, Image } from "@chakra-ui/react";

export default function Asia() {
    return (
        <>
            <Head>
                <title>Ásia | WorldTrip</title>
            </Head>
            <Header continentPage={true}/>
            <Flex backgroundImage="url('/continents/continentasia.png')" bgSize={["contain", "cover"]} height={["130", "500"]} flexDir="column" align={["center", "end"]} justify={["center", "flex-end"]}>
                <Heading position="relative" color='#F5F8FA' fontSize={["28", "48px"]} fontWeight="600" mb={["0", "35px"]} ml={["0", "140"]}>Ásia</Heading>
            </Flex>
            <Flex justify="space-between" flexDir={["column", "row"]} pb={["0", "2rem"]} pt={["1rem", "4rem"]} px={["1.5rem", "7rem"]}>
                <Box flex="50%">
                    <Text fontWeight="400" color="#47585B" fontSize={["14px", "24px"]} textAlign="justify">
                    A Ásia é o maior continente em área terrestre do mundo, estando boa parte do continente localizado no Hemisfério Norte.
                    Além de ser o mais extenso, é também o mais populoso, habitando nele cerca de três quintos da população mundial.
                    A Ásia é multicultural, abrigando diversas culturas, etnias, religiões e tradições.
                    </Text>
                </Box>
                <Flex py={["10px", "0"]} justify={["space-between", "space-evenly"]} alignItems={["left", "center"]} flex="50%">
                    <Flex flexDir="column" align={["left", "center"]}>
                        <Heading color="#FFBA08" fontSize={["24", "48"]} fontWeight="600">51</Heading>
                        <Text color="#47585B" fontSize={["18", "24"]} fontWeight={["400", "600"]}>países</Text>
                    </Flex>
                    <Flex flexDir="column" align={["left", "center"]}>
                        <Heading color="#FFBA08" fontSize={["24", "48"]} fontWeight="600">2.301</Heading>
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
                            <Image src="/citys/honkkong.png" />
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
                                        Hong Kong
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        China
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/china.svg" width="30px" height="30px"/>
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem width={["100%", "auto"]}>
                        <Box w="256px" mx="auto">
                            <Image src="/citys/bangkok.png" />
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
                                        Bangkok
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        Tailândia
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/tailandia.svg" width="30px" height="30px"/>
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem width={["100%", "auto"]}>
                        <Box w="256px" mx="auto">
                            <Image src="/citys/kualalumpur.png" />
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
                                        Kuala lumpur
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        Malásia
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/malasia.svg" width="30px" height="30px"/>
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem width={["100%", "auto"]}>
                        <Box w="256px" mx="auto">
                            <Image src="/citys/singapore.png" />
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
                                        Singapura
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        Singapura
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/singapura.svg" width="30px" height="30px"/>
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem width={["100%", "auto"]}>
                        <Box w="256px" mx="auto">
                            <Image src="/citys/dubai.png" />
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
                                        Dubai
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        Emirados Árabes Unidos
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/emirados.svg" width="30px" height="30px"/>
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                </Wrap>
            </Box>
        </>
    );
};