import {
    Box,
    BoxProps,
    CloseButton,
    Heading
} from "@chakra-ui/react";
import NavLink from "./NavLink";
import{
    useRouter
} from 'next/router';

import {
    FiHome,
    FiLogIn
} from 'react-icons/fi';

interface SideBarProps extends BoxProps {
    onClose?: () => void;
}

export default function SideBar({onClose, ...base}: SideBarProps) {
    const router = useRouter();
    const path = router.asPath;
    
    return (
        <Box
            bg={'gray.900'}
            // px={5}
            py={5}
            h={'full'}
            w={{base: 'full', md: 60}}
            pos={'fixed'}
            {...base}
        >
            {/* Title */}
            <Box
                display={'flex'}
                px={5}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Heading fontSize={'xl'}>Randpost</Heading>
                <CloseButton color={'gray.400'} display={{md:'none'}} onClick={onClose} />
            </Box>
            
            <Box
                mt={10}
                gap={4}
                display={'flex'}
                flexDirection={'column'}
            >
                {links.map((x,i) => (
                    <NavLink isActive={path == x.href} icon={x.icon} key={i} href={x.href} name={x.name} />
                ))}
            </Box>
        </Box>
    )
}

let links = [
    {
        name: 'Home',
        href: '/',
        icon: FiHome
    },
    {
        name: 'Login',
        href: '/login',
        icon: FiLogIn
    }
]