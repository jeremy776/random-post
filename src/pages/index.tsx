import {
  Box,
  Drawer,
  Text,
  Avatar
} from '@chakra-ui/react';
import Container from '../components/Container';
import Head from '../components/Head';

import Sidebar from '../components/Sidebar/Main';

const Index = () => (
  <Box
    h={'100vh'}
  >
    <Head />
    <Sidebar />

    <Container>
      
      <Box
        bg={'gray.700'}
        p={4}
        rounded={'base'}
        shadow={'sm'}
        borderColor={'gray.800'}
        borderWidth={2}
        transition={'all 0.5s ease'}
        _hover={{
          borderColor: 'cyan.400'
        }}
      >
        <Box
          display={"flex"}
          gap={3}
        >
          <Box>
            <Avatar size={"sm"} src={"...."} alt={"ok"} />
          </Box>
          <Box>
            <Text fontWeight={"bold"} color={"gray.400"} fontSize={"sm"}>Anonymous</Text>
            <Text fontSize={"10px"} fontWeight={"medium"} color={"gray.500"}>12 Februari 2022 - 09:17 WIB</Text>
          </Box>
        </Box>
        
        <Box>
          <Text mt={4} color={"gray.300"} fontSize={"xs"}>
            Just test
          </Text>
          
        </Box>
      </Box>

    </Container>


  </Box>
)

export default Index;