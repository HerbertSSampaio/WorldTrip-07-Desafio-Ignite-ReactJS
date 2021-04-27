import { Flex, Image, Box, Center } from "@chakra-ui/react";
import Link from "next/link";

interface HeaderProps {
    continentPage?: boolean;
}

export function Header({continentPage = false}:HeaderProps) {
    return continentPage ?
        (
            <Flex
                as="header"
                w="100%"
                justify="center"
                py="4"
                px={["2rem", "7rem"]}
            >
                <Box cursor="pointer" mr="auto">
                    <Link href="/">
                        <Box as="a" py="1rem" px="1.5rem">
                            <Image src="/arrowleft.svg" />
                        </Box>
                    </Link>
                </Box>

                <Center w="100%">
                    <Image src="/logo.svg" alt="Logotipo" />
                </Center>
            </Flex>
        ) : (
            <Flex
                as="header"
                w="100%"
                justify="center"
                py="4"
            >
                <Image src="/logo.svg" alt="Logotipo" />
            </Flex>
        )
}