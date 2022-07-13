import {
    Box,
    Drawer,
    DrawerContent,
    Heading,
    IconButton,
    useDisclosure
} from '@chakra-ui/react';
import {
    HamburgerIcon
} from '@chakra-ui/icons';
import { useRef } from 'react';
import SideBar from '../SideBar';

export default function SidebarMobile() {
    const {
        isOpen,
        onClose,
        onOpen
    } = useDisclosure();

    const refSide = useRef();

    return (
        <Box
            bg={'gray.900'}
            py={3}
            px={4}
            display={{md: 'none'}}
        >
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Box>
                    <Heading fontSize={'xl'}>Randomly</Heading>
                </Box>

                <Box>
                    <IconButton onClick={onOpen} ref={refSide} aria-label={'show-sidebar'} icon={<HamburgerIcon />} />
                </Box>
            </Box>

            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                placement={'left'}
                finalFocusRef={refSide}
                size={'full'}
            >
                <DrawerContent>
                    <SideBar onClose={onClose} />
                </DrawerContent>
            </Drawer>
        </Box>
    )
}