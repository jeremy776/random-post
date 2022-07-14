import {
    Box
} from '@chakra-ui/react';


export default function Container({ children, ...b }) {
    return (
        <Box
            pl={{ base: 0, md: 60 }}
            w={'100%'}
            {...b}
        >
            {children}
        </Box>
    )
}