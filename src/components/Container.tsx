import {
    Box
} from '@chakra-ui/react';


export default function Container({ children }) {
    return (
        <Box
            px={{ base: 5, md: 72 }}
            py={{ base: 5, md: 25 }}
        >
            {children}
        </Box>
    )
}