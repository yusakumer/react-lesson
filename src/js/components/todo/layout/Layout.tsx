import { Avatar, Button, HStack, Heading } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React, { PropsWithChildren, useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useAuth } from "../../../hooks/use-auth";
import { useNavigate } from "react-router-dom";

type Props = {
    title:string;
}

export const Layout = ({title, children }: PropsWithChildren<Props>) => {
  const { isLoggedIn, logout, username ,isLoginDone} = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoginDone && !isLoggedIn) {
      navigate("/login");
    }
  }, [isLoginDone,isLoggedIn]);

  if (isLoggedIn) return null;

  return (
    <Box as="main" w="720px" mx="auto" mt="20">
      <HStack as="header" justifyContent="space-between" spacing="3">
        <Heading as="h1" size="2xl">
          {title}
        </Heading>
        <HStack justifyContent="end" spacing="4">
          <HStack spacing="5">
            <Avatar bg="red.500" icon={<AiOutlineUser fontSize="1.5rem" />} />
            <Box>{username}</Box>
          </HStack>

          <Box>
            <Button onClick={logout} colorScheme="red" size={"xs"}>
              logout
            </Button>
          </Box>
        </HStack>
      </HStack>
      {children}
    </Box>
  );
};
