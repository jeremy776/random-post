import {
    Box,
    BoxProps,
    Icon,
    Text
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

interface NavLinkProps extends BoxProps {
    name: string;
    href: string;
    icon: IconType;
    isActive: Boolean;
}

export default function NavLink({name, href, icon, isActive}: NavLinkProps) {
    return (
        <Link href={href}>
            <Box
                display={'flex'}
                cursor={'pointer'}
                fontWeight={'medium'}
                color={isActive ? 'gray.100' : 'gray.600'}
                alignItems={'center'}
                justifyContent={{base: 'center', md: 'start'}}
                fontSize={{base: 'xl', md: 'medium'}}
                gap={5}
                _hover={{
                    color: 'gray.300'
                }}
            >
                {icon && <Icon as={icon} />}
                <Text>{name}</Text>
            </Box>
        </Link>
    )
}