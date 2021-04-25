import { Flex, Box, Image, Text, Heading } from "@chakra-ui/react";

export function Banner() {
    return (
        <Box position="relative">
            <Flex position="absolute" w="100%" top="16" px="24" d="flex" justify="space-between">
                <Box>
                    <Heading color='#F5F8FA' fontWeight="500" mb="8" isTruncated>5 Continentes,<br></br> infinitas possibilidades.</Heading>
                    <Text color='#DADADA' fontWeight="400" fontSize="20">Chegou a hora de tirar do papel a viagem que você<br></br> sempre sonhou.</Text>
                </Box>

                <Image src="/airplane.svg" alt="Banner" h="250"/>
            </Flex>
            <Image src="/background.png" w="100%" alt="Banner" />
        </Box>

    );
}