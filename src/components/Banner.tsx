import { Flex, Box, Image, Text, Heading } from "@chakra-ui/react";

export function Banner() {
    return (
        <Box>
            <Flex backgroundImage="url('/background.png')" bgSize="contain" w="100%" top="16" px="24" d="flex" justify="space-between">
                <Box my="12">
                    <Heading color='#F5F8FA' fontWeight="500" mb="10" isTruncated>5 Continentes,<br></br> infinitas possibilidades.</Heading>
                    <Text color='#DADADA' fontWeight="400" fontSize="20">Chegou a hora de tirar do papel a viagem que você<br></br> sempre sonhou.</Text>
                </Box>
                <Box>
                    <Image position="absolute" right="20" top="36" src="/airplane.svg" alt="Banner" h="250"/>
                </Box>
                
            </Flex>
            {/* <Image src="/background.png" w="100%" alt="Banner" /> */}
        </Box>

    );
}