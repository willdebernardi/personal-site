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
      <Heading>Will DeBernardi</Heading>
      {/* <Spacer /> */}
      <HStack spacing="10">
        <Link onClick={() => props.api.moveTo(1)}>About</Link>
        <Link onClick={() => props.api.moveTo(2)}>Work</Link>
        <Link onClick={() => props.api.moveTo(3)}>Contact</Link>
        <Link href="https://github.com/willdebernardi" target="_blank">
          <Icon as={VscGithub} display="block" h="24px" w="24px"></Icon>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Header;
