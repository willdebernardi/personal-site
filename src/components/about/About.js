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
        <Heading fontSize="2xl" color="teal">
          Hi, my name is
        </Heading>
        <Text fontSize="8xl" color="gray.400">
          Will DeBernardi.
        </Text>
        <Text pt={-5} fontSize="6xl" color="gray.500">
          I develop things.
        </Text>
        <Text fontsize="4xl" color="gray.500" maxWidth="40vw">
          I am a 21 year-old computer science student and aspiring software
          engineer, graduating from the University of New Mexico in December
          2022. Currently based in Albuquerque, New Meixco, but I am extremely
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
        <Heading fontSize="2xl" color="teal">
          Skills:
        </Heading>
        <Text pt={4} color="gray.500">HTML: 95%</Text>
        <Progress value={95} w={350} h={5} colorScheme="facebook" />
        <Text pt={4} color="gray.500">CSS: 90%</Text>
        <Progress value={90} w={350} h={5} colorScheme="facebook" />
        <Text pt={4} color="gray.500">JavaScript: 80%</Text>
        <Progress value={80} w={350} h={5} colorScheme="facebook" />
        <Text pt={4} color="gray.500">Java: 80%</Text>
        <Progress value={80} w={350} h={5} colorScheme="facebook" />
        <Text pt={4} color="gray.500">React: 75%</Text>
        <Progress value={75} w={350} h={5} colorScheme="facebook" />
        <Text pt={4} color="gray.500">Python: 70%</Text>
        <Progress value={70} w={350} h={5} colorScheme="facebook" />
        <Text pt={4} color="gray.500">NodeJS: 65%</Text>
        <Progress value={65} w={350} h={5} colorScheme="facebook" />
        <Text pt={4} color="gray.500">C: 50%</Text>
        <Progress value={50} w={350} h={5} colorScheme="facebook" />
      </Flex>
    </Flex>
  );
};

export default About;
