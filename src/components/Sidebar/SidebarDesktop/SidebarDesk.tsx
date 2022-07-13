import {
    Box
} from '@chakra-ui/react';

import NavbarDesk from './NavbarDesk';
import SideBar from '../SideBar';

export default function SidebarDesk() {
    return (
        <Box display={{ base: 'none', md: 'flex' }} flexDir={'row'}>
            <Box w={72}>
                <SideBar
                    display={{ base: 'none', md: 'block' }}
                />
            </Box>
            <Box
                w={'100%'}
                bg={'gray.300'}
                display={'block'}
            >
                <NavbarDesk
                    display={{ base: 'none', md: 'block' }}
                />
            </Box>
        </Box>
    )
}