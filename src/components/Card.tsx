import {
    Box,
    Avatar,
    Text
} from '@chakra-ui/react';

interface CardProps {
    name?: string;
    date?: string;
    text: string;
    avatar?: string;
}

export default function Card({ name, date, text, avatar }: CardProps) {
    return (
        <Box
            bg={'gray.900'}
            p={4}
            rounded={'base'}
            // shadow={'lg'}
            borderColor={'gray.800'}
            w={{base: 'full', md: '350px'}}
            borderWidth={1}
            transition={'all 0.5s ease'}
            _hover={{
                borderColor: 'cyan.400'
            }}
        >
            
        </Box>
    )
}