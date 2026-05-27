import { Box, Button, Heading, HStack, Input } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAuth } from "../hooks/use-auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { isLoggedIn,login, username, setUserName } = useAuth();
  const navigate = useNavigate();

  // ログイン中だった場合、/todoに遷移させる
  useEffect(() => {
    if(isLoggedIn) {
        navigate("/todo")
    }
  },[isLoggedIn])


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
