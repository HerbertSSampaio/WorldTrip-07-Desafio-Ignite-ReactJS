import { Flex, Text, Box, Image } from "@chakra-ui/react";

export function TravelTypes() {
    return (
        <Flex w="100%" my="20" d="flex" justify="space-evenly">
            <Flex direction="column" align="center">
                <Image src="icons/cocktail.svg" h="85"/>
                <Text as="span" fontWeight="600" fontSize="24" mt="3" color="#47585B">vida noturna</Text>
            </Flex>
            <Flex direction="column" align="center">
                <Image src="icons/surf.svg" h="85" />
                <Text as="span" fontWeight="600" fontSize="24" mt="3" color="#47585B">praia</Text>
            </Flex>
            <Flex direction="column" align="center">
                <Image src="icons/building.svg" h="85" />
                <Text as="span" fontWeight="600" fontSize="24" mt="3" color="#47585B">moderno</Text>
            </Flex>
            <Flex direction="column" align="center">
                <Image src="icons/museum.svg" h="85" />
                <Text as="span" fontWeight="600" fontSize="24" mt="3" color="#47585B">clássico</Text>
            </Flex>
            <Flex direction="column" align="center">
                <Image src="icons/earth.svg" h="85" />
                <Text as="span" fontWeight="600" fontSize="24" mt="3" color="#47585B">e mais...</Text>
            </Flex>
        </Flex>
    );
}