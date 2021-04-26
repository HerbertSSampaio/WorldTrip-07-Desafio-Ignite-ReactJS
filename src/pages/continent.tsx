import { Header } from "../components/Header";
import { Flex, Heading, Box, Text, Center, Wrap, WrapItem, Image } from "@chakra-ui/react";

export default function Continent() {
    return (
        <>
            <Header />
            <Flex backgroundImage="url('/europecontinent.png')" bgSize="cover" height="500" flexDir="column" justify="flex-end">
                <Heading position="relative" color='#F5F8FA' fontSize="48px" fontWeight="600" mb="35px" ml="140">Europa</Heading>
            </Flex>
            <Flex justify="space-between" pb="2rem" pt="4rem" px="7rem">
                <Box w="600px">
                    <Text fontWeight="400" color="#47585B" fontSize="24px" textAlign="justify">
                    A Europa é, por convenção, um dos seis 
                    continentes do mundo. Compreendendo a 
                    península ocidental da Eurásia, a Europa 
                    geralmente divide-se da Ásia a leste pela 
                    divisória de águas dos montes Urais, o rio Ural, o 
                    mar Cáspio, o Cáucaso, e o mar Negro a sudeste 
                    </Text>
                </Box>
                <Flex justify="space-evenly" alignItems="center" w="600px">
                    <Flex flexDir="column" align="center">
                        <Heading color="#FFBA08" fontSize="48" fontWeight="600">50</Heading>
                        <Text color="#47585B" fontSize="24" fontWeight="600">países</Text>
                    </Flex>
                    <Flex flexDir="column" align="center">
                        <Heading color="#FFBA08" fontSize="48" fontWeight="600">60</Heading>
                        <Text color="#47585B" fontSize="24" fontWeight="600">línguas</Text>
                    </Flex>
                    <Flex flexDir="column" align="center">
                        <Heading color="#FFBA08" fontSize="48" fontWeight="600">27</Heading>
                        <Text color="#47585B" fontSize="24" fontWeight="600">cidades +100</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Box px="7rem">
                <Heading py="2rem">Cidades +100</Heading>
                <Wrap spacing="35px">
                    <WrapItem>
                        <Box w="256px">
                            <Image src="/citys/londres.png" />
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
                                        Londres
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        Reino Unido
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/reinounido.svg" />
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box w="256px">
                            <Image src="/citys/paris.png" />
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
                                        Paris
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        França
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/franca.svg" />
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box w="256px">
                            <Image src="/citys/roma.png" />
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
                                        Roma
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        Itália
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/italia.svg" />
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box w="256px">
                            <Image src="/citys/praga.png" />
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
                                        Praga
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        República Tcheca
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/republicatcheca.svg" />
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box w="256px">
                            <Image src="/citys/amsterda.png" />
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
                                        Amsterdã
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        Holanda
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/holanda.svg" />
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                </Wrap>
            </Box>
        </>
    );
};