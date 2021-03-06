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
    isActive: Boolean;
}

export default function NavLink({name, href, isActive}: NavLinkProps) {
    return (
        <Link href={href}>
            <Box
                display={'flex'}
                cursor={'pointer'}
                fontWeight={'medium'}
                color={isActive ? 'gray.100' : 'gray.600'}
                
                px={{md: 5}}
                py={{md: 2}}
                borderRightRadius={{md: '5px'}}
                bg={{md: isActive ? 'whiteAlpha.100' : null}}
                borderLeftWidth={{md: isActive ? 3 : 0}}
                borderLeftColor={{md: isActive ? 'cyan.300' : null}}

                alignItems={'center'}
                justifyContent={{base: 'center', md: 'start'}}
                transition={'all 0.4s ease'}
                fontSize={{base: 'xl', md: 'medium'}}
                gap={5}
                _hover={{
                    color: 'gray.300'
                }}
            >
                <Text>{name}</Text>
            </Box>
        </Link>
    )
}