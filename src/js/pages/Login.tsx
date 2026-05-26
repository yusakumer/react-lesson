import { Box, Button, Heading, HStack, Input } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../hooks/use-auth";

export const Login = () => {
  const { login, username, setUserName } = useAuth();
  return (
    <Box as="main" w="720px" mx="auto" mt="20">
      <Heading as="h1" size="xl">
        loggin
      </Heading>
      <HStack spacing="4" mt="15">
        <Input
          placeholder="ユーザー名"
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Button colorScheme="blue" onClick={login}>
          Button
        </Button>
      </HStack>
    </Box>
  );
};
