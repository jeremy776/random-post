import {
  Box,
  Drawer,
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
        <p>ij</p>
      </Box>

    </Container>


  </Box>
)

export default Index;