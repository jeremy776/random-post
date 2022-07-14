import {
  Box,
  Drawer,
  Text,
  Avatar
} from '@chakra-ui/react';
import Card from '../components/Card';
import Container from '../components/Container';
import Head from '../components/Head';

import Sidebar from '../components/Sidebar/Main';
import Wrapper from '../components/Wrapper';

export default function Index({ post }) {
  console.log(post)
  return (
    <Box
      h={'100vh'}
    >
      <Head />
      <Sidebar />

      <Container>

        <Wrapper>
          <Card text='hello whatsapp' />
          <Card text='hello whatsapp' />
          <Card text='hello whatsapp' />
        </Wrapper>

      </Container>


    </Box>
  )
}