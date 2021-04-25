import { Flex, Image } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            justify="center"
            py="4"
        >
            <Image src="/logo.svg" alt="Logotipo" />
        </Flex>
    );
}