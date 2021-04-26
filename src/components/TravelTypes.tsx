import { Flex, Text, Box, Image } from "@chakra-ui/react";

export function TravelTypes() {
    return (
        <Flex w="100%" my={["6", "20"]} d="flex" flexWrap="wrap" px={["14", "24"]}>
            <Flex direction={["row", "column"]} align="center" margin="10px auto">
                <Image src="icons/cocktail.svg" h="85" display={["none", "block"]} />
                <Box as="span" h="8px" w="8px" mx="8px" bgColor="#FFBA08" borderRadius="50%" display={["block", "none"]}></Box>
                <Text as="span" textAlign="center" fontWeight="600" fontSize={["18","24"]} mt={["-4px", "3"]} color="#47585B">vida noturna</Text>
            </Flex>
            <Flex direction={["row", "column"]} align="center" margin="10px auto">
                <Image src="icons/surf.svg" h="85" display={["none", "block"]} />
                <Box as="span" h="8px" w="8px" mx="8px" bgColor="#FFBA08" borderRadius="50%" display={["block", "none"]}></Box>
                <Text as="span" fontWeight="600" fontSize={["18","24"]} mt={["-4px", "3"]} color="#47585B">praia</Text>
            </Flex>
            <Flex direction={["row", "column"]} align="center" margin="10px auto">
                <Image src="icons/building.svg" h="85" display={["none", "block"]} />
                <Box as="span" h="8px" w="8px" mx="8px" bgColor="#FFBA08" borderRadius="50%" display={["block", "none"]}></Box>
                <Text as="span" fontWeight="600" fontSize={["18","24"]} mt={["-4px", "3"]} color="#47585B">moderno</Text>
            </Flex>
            <Flex direction={["row", "column"]} align="center" margin="10px auto">
                <Image src="icons/museum.svg" h="85" display={["none", "block"]} />
                <Box as="span" h="8px" w="8px" mx="8px" bgColor="#FFBA08" borderRadius="50%" display={["block", "none"]}></Box>
                <Text as="span" fontWeight="600" fontSize={["18","24"]} mt={["-4px", "3"]} color="#47585B">clássico</Text>
            </Flex>
            <Flex direction={["row", "column"]} align="center" margin="10px auto">
                <Image src="icons/earth.svg" h="85" display={["none", "block"]} />
                <Box as="span" h="8px" w="8px" mx="8px" bgColor="#FFBA08" borderRadius="50%" display={["block", "none"]}></Box>
                <Text as="span" fontWeight="600" fontSize={["18","24"]} mt={["-4px", "3"]} color="#47585B">e mais...</Text>
            </Flex>
        </Flex>
    );
}