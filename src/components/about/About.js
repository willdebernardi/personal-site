import {
  Avatar,
  Flex,
  Heading,
  Progress,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const About = () => {
  return (
    <Flex w="100vw" justify="space-evenly" px={10}>
      <Flex direction="column" >
        <Heading fontSize="2xl" color="#E6AF2E">
          Hi, my name is
        </Heading>
        <Heading fontSize="8xl" color="#E0E2DB">
          Will DeBernardi.
        </Heading>
        <Heading mt={-3} mb={2} fontWeight="light" fontSize="6xl" color="#E0E2DB">
          I develop things.
        </Heading>
        <Text color="#E0E2DB" maxWidth="40vw">
          I am a 21 year-old computer science student and aspiring software
          engineer, graduating from the University of New Mexico in December
          2022. Currently based in Albuquerque, New Mexico, but I am extremely
          eager to get out and see the wider world. Outside of programming, I
          love learning languages (currently studying German and Japanese),
          skiing, rock climbing, and video games.
        </Text>
        <Avatar
          src="https://avatars.githubusercontent.com/u/58276827?v=4"
          size="2xl"
          alignSelf="center"
          marginTop={5}
        />
      </Flex>
      <Flex direction="column">
        <Heading fontSize="2xl" color="#E6AF2E">
          Skills
        </Heading>
        <Text pt={4} color="#E0E2DB">HTML: 95%</Text>
        <Progress value={95} w={350} h={5} colorScheme="whiteAlpha" />
        <Text pt={4} color="#E0E2DB">CSS: 90%</Text>
        <Progress value={90} w={350} h={5} colorScheme="whiteAlpha" />
        <Text pt={4} color="#E0E2DB">JavaScript: 80%</Text>
        <Progress value={80} w={350} h={5} colorScheme="whiteAlpha" />
        <Text pt={4} color="#E0E2DB">Java: 80%</Text>
        <Progress value={80} w={350} h={5} colorScheme="whiteAlpha" />
        <Text pt={4} color="#E0E2DB">React: 75%</Text>
        <Progress value={75} w={350} h={5} colorScheme="whiteAlpha" />
        <Text pt={4} color="#E0E2DB">Python: 70%</Text>
        <Progress value={70} w={350} h={5} colorScheme="whiteAlpha" />
        <Text pt={4} color="#E0E2DB">NodeJS: 55%</Text>
        <Progress value={55} w={350} h={5} colorScheme="whiteAlpha" />
        <Text pt={4} color="#E0E2DB">C: 50%</Text>
        <Progress value={50} w={350} h={5} colorScheme="whiteAlpha" />
      </Flex>
    </Flex>
  );
};

export default About;
