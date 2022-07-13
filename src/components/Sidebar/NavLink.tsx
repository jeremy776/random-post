import {
    Box,
    BoxProps,
    Text
} from '@chakra-ui/react';
import Link from 'next/link';

interface NavLinkProps extends BoxProps {
    name: string;
    href: string;
}

export default function NavLink({name, href}: NavLinkProps) {
    return (
        <Link href={href}>
            <Box
                display={'flex'}
                cursor={'pointer'}
                fontWeight={'bold'}
                color={'gray.600'}
                alignItems={'center'}
                gap={5}
                _hover={{
                    color: 'gray.300'
                }}
            >
                <Text>x</Text>
                <Text>{name}</Text>
            </Box>
        </Link>
    )
}