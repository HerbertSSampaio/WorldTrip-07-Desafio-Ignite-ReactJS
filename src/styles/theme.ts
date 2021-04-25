import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    font: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
            }
        }
    }
})