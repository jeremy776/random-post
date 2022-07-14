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
            bg={'gray.700'}
            p={4}
            rounded={'base'}
            shadow={'lg'}
            borderColor={'gray.800'}
            w={{base: 'full', md: '350px'}}
            borderWidth={1}
            transition={'all 0.5s ease'}
            _hover={{
                borderColor: 'cyan.400'
            }}
        >
            <Box
                display={"flex"}
                gap={3}
                alignItems={'center'}
            >
                <Box>
                    <Avatar size={'xs'} name={'John Doe'} />
                </Box>
                <Box>
                    <Text fontWeight={"bold"} color={"gray.400"} fontSize={"sm"}>{name || 'Anonymous'}</Text>
                    <Text fontSize={"10px"} fontWeight={"medium"} color={"gray.500"}>12 Februari 2022 - 09:17 WIB</Text>
                </Box>

            </Box>
            <Box mt={3}>
                <Text fontWeight={'medium'} fontSize={'sm'} color={'gray.300'}>{text}</Text>
            </Box>
        </Box>
    )
}