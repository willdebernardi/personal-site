import {
  Box,
  Flex,
  Heading,
  HStack,
  Spacer,
  Link,
  Icon,
} from '@chakra-ui/react';
import { VscGithub } from 'react-icons/vsc';
import React from 'react';

const Header = (props) => {
  return (
    <Flex
      as="div"
      w="100%"
      h="75px"
      px="100"
      py="5"
      justify="space-between"
      position="absolute"
      zIndex={999}
    >
      <HStack spacing="2">
          <Heading color="#E0E2DB" fontWeight="light">Will</Heading>
          <Heading color="#E6AF2E">DeBernardi</Heading>
      </HStack>
    
      {/* <Spacer /> */}
      <HStack spacing="10">
        <Link color="#E0E2DB" onClick={() => props.api.moveTo(1)}><Heading color="#E6AF2E" size="xs">0.1</Heading>About</Link>
        <Link color="#E0E2DB" onClick={() => props.api.moveTo(2)}><Heading color="#E6AF2E" size="xs">0.2</Heading>Work</Link>
        <Link color="#E0E2DB" onClick={() => props.api.moveTo(3)}><Heading color="#E6AF2E" size="xs">0.3</Heading>Contact</Link>
        <Link href="https://github.com/willdebernardi" target="_blank">
          <Icon as={VscGithub} display="block" h="24px" w="24px"></Icon>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Header;
