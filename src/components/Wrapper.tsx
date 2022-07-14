import {
    Box
} from '@chakra-ui/react';

export default function Wrapper({children, ...style}) {
    return (
        <Box
            display={'flex'}
            flexWrap={'wrap'}
            gap={2}
            p={4}
            w={'full'}
            {...style}
        >
            {children}
        </Box>
    )
}