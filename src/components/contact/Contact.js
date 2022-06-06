import {
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    let inputVal = e.target.value;
    setName(inputVal);
  }

  const handleEmailChange = (e) => {
    let inputVal = e.target.value;
    setEmail(inputVal);
  }

  const handleMessageChange = (e) => {
    let inputVal = e.target.value;
    setMessage(inputVal);
  }

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  }

  const handleSubmit = (e) => {
    // TODO: make axios call to backend to send email
    e.preventDefault();
    console.log("name: " + name);
    console.log("email: " + email);
    console.log("message: " + message); 
    resetForm();
  }

  return (
    <Flex w="100vw" justify="space-evenly" px={10}>
      <Flex direction="column" justify="center">
        <Heading size="2xl" color="#E6AF2E" mb={3}>
          Have I caught your attention?
        </Heading>
        <Heading fontWeight="light" size="xl" color="#E0E2DB">
          Fill out the form to get in contact with me!
        </Heading>
      </Flex>
      <form onSubmit={handleSubmit}>
        <FormControl w="40vw">
          <FormLabel htmlFor="name" color="#E0E2DB">Name</FormLabel>
          <Input id="name" value={name} onChange={handleNameChange} mb={5} />
          <FormLabel htmlFor="email" color="#E0E2DB">Email</FormLabel>
          <Input id="email" value={email} onChange={handleEmailChange} type="email" mb={5} />
          <FormLabel htmlFor="message" color="#E0E2DB">Message</FormLabel>
          <Textarea id="message" value={message} onChange={handleMessageChange} resize="none" mb={5} />
          <Button type="submit" color="#E0E2DB">Submit</Button>
        </FormControl>
      </form>
    </Flex>
  );
};

export default Contact;
