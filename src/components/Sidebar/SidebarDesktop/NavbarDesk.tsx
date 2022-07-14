import { Box, Heading } from "@chakra-ui/react";

export default function NavbarDesk({...base}) {
    return (
        <Box
            bg={'gray.900'}
            p={5}
            pl={10}
            w={'full'}
            {...base}
        >
            <Heading fontSize={'xl'}></Heading>
        </Box>
    )
}