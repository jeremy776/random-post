import {
    Box,
    BoxProps,
    CloseButton,
    Heading
} from "@chakra-ui/react";
import NavLink from "./NavLink";

interface SideBarProps extends BoxProps {
    onClose?: () => void;
}

export default function SideBar({onClose, ...base}: SideBarProps) {
    return (
        <Box
            bg={'gray.900'}
            px={5}
            py={5}
            h={'full'}
            w={{base: 'full', md: 60}}
            pos={'fixed'}
            {...base}
        >
            {/* Title */}
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Heading fontSize={'xl'}>....</Heading>
                <CloseButton color={'gray.400'} display={{md:'none'}} onClick={onClose} />
            </Box>
            
            <Box
                mt={10}
                gap={4}
                display={'flex'}
                flexDirection={'column'}
            >
                {links.map((x,i) => (
                    <NavLink key={i} href={x.href} name={x.name} />
                ))}
            </Box>
        </Box>
    )
}

let links = [
    {
        name: 'Beranda',
        href: '/'
    },
    {
        name: 'Login',
        href: '#'
    }
]