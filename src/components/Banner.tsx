import { Flex, Box, Image, Text, Heading } from "@chakra-ui/react";

export function Banner() {
    return (
            <Flex backgroundImage="url('/background.png')" bgSize="cover" w="100%" top="16" px={["4", "24"]} d="flex" justify="space-between">
                <Box my={["8","12"]}>
                    <Heading color='#F5F8FA' fontWeight="500" fontSize={["20px", "36px"]} mb={["2", "10"]}>5 Continentes,<br></br> infinitas possibilidades.</Heading>
                    <Text color='#DADADA' fontWeight="400" fontSize={["16", "20"]}>Chegou a hora de tirar do papel a viagem que você <Box as="br" display={["none", "block"]} /> sempre sonhou.</Text>
                </Box>
                <Box>
                    <Image position="absolute" display={["none", "block"]} right="20" top="36" src="/airplane.svg" alt="Banner" h="250"/>
                </Box>
            </Flex>
    );
}