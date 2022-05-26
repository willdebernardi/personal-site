import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Center,
  Heading,
} from '@chakra-ui/react';
import Header from './components/header/Header';
import ReactFullpage from '@fullpage/react-fullpage';

function App() {
  const [api, setApi] = useState("");

  return (
    <ChakraProvider theme={theme}>
      <Header api={api} />
      <ReactFullpage
        scrollingSpeed={1000}
        navigation
        paddingTop='75px'
        render={({ state, fullpageApi }) => {
          setApi(fullpageApi)
          return (
            <>
              <ReactFullpage.Wrapper>
                  <Center as='div' className='section' bg="tomato" color="white" w="100%">
                    <Heading>Section 1</Heading>
                  </Center>
                  <Center as='div' className='section' bg="purple" color="white" w="100%">
                    <Heading>Section 2</Heading>
                  </Center>
                  <Center as='div' className='section' bg="blue" color="white" w="100%">
                    <Heading>Section 3</Heading>
                  </Center>
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      />
    </ChakraProvider>
  );
}

export default App;
