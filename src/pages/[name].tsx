import {
  Box,
  Drawer,
  Text,
  Avatar
} from '@chakra-ui/react';
import Card from '../components/Card';
import {
  Prose
} from "@nikolovlazar/chakra-ui-prose";
import Container from '../components/Container';
import Head from '../components/Head';

import Sidebar from '../components/Sidebar/Main';
import Wrapper from '../components/Wrapper';
import markdownToHtml from '../lib/markdown';
import { getDoc, getAllDocs } from '../lib/getDocs';

export default function Index({content}) {
  return (
    <Box
      bg={'gray.900'}
      minH={'100vh'}
    >
      <Head />
      <Sidebar />

      <Container>
        <Wrapper>
          <Prose w={'100%'}>
            <div dangerouslySetInnerHTML={{
              __html: content
            }} />
          </Prose>
        </Wrapper>
      </Container>


    </Box>
  )
}

export async function getStaticProps({ params }) {
  let content = getDoc(`${params.name}.md`).content
  let res = await markdownToHtml(content);

  return {
    props: {
      content: res,
      title: params.name
    }
  }
}

export async function getStaticPaths() {
  const docs = getAllDocs();

  return {
    paths: docs.map(x => {
      return {
        params: {
          name: x.name
        }
      }
    }),
    fallback: 'blocking'
  }
}