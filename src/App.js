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
  extendTheme,
} from '@chakra-ui/react';
import Header from './components/header/Header';
import ReactFullpage from '@fullpage/react-fullpage';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  const [api, setApi] = useState("");

  const theme = extendTheme({
    colors: {
      brand: {
        100: "#EGAF2E"
      }
    }
  })

  return (
    <ChakraProvider theme={theme}>
      <Header api={api} />
      <ReactFullpage
        scrollingSpeed={1000}
        navigation
        render={({ state, fullpageApi }) => {
          setApi(fullpageApi)
          return (
            <>
              <ReactFullpage.Wrapper>
                  <Center as='div' className='section' color="white" w="100%">
                    <About />
                  </Center>
                  <Center as='div' className='section' color="white" w="100%">
                    <Heading>Section 2</Heading>
                  </Center>
                  <Center as='div' className='section' color="white" w="100%">
                    <Contact />
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
