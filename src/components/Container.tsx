import {
    Box
} from '@chakra-ui/react';


export default function Container({ children }) {
    return (
        <Box
            px={{ base: 3, md: 72 }}
            py={{ base: 4, md: 25 }}
        >
            {children}
        </Box>
    )
}