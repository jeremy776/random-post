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

export default function Index() {
  return (
    <Box
      h={'100vh'}
    >
      <Head />
      <Sidebar />

      <Container>

        <Wrapper>
          {data.map((x, i) => (
            <Card key={i} text={x.text} />
          ))}
        </Wrapper>

      </Container>


    </Box>
  )
}


let data = [
  {
    text: 'yoi'
  },
  {
    text: 'ok'
  }, {
    text: 'ok'
  },
  {
    text: 'ok'
  },
  {
    text: 'ok'
  },
  {
    text: 'ok'
  },
  {
    text: 'ok'
  },
  {
    text: 'ok'
  }
]