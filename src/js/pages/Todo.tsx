import { Avatar, Box, Button, Heading, HStack, Input } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { NewTodoForm } from "../components/todo/NewTodoForm";
import { TodoTable } from "../components/todo/Todotable";
import { useAuth } from "../hooks/use-auth";
import { useTodoList } from "../hooks/use-todoList";
import { useNavigate } from "react-router-dom";

export const Todo = () => {
  const { isLoggedIn,logout, username } = useAuth();
  const { todoList, addTodo, deleteTodo, filterWord, setFilterWord } =useTodoList();

  const navigate = useNavigate();
  
  // ログアウト中にアクセスされたら、/logonに遷移させる

  useEffect(() => {
    if (!isLoggedIn) {
        navigate("/login");
    };
  },[isLoggedIn]);


  return (
    <Box as="main" w="720px" mx="auto" mt="20">
      <HStack as="header" justifyContent="space-between" spacing="3">
        <Heading as="h1" size="2xl">
          Todo
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
      <Box mt="20">
        <Heading as="h2" size="xl">
          新規Todo作成
        </Heading>
        <Box mt="10">
          <NewTodoForm addTodo={addTodo} />
        </Box>
      </Box>
      <Box as="section" mt="20">
        <Heading as="h3" size="xl">
          TODOLIST
        </Heading>
        <Box p="10">
          <Input
            placeholder="絞り込み"
            type="text"
            value={filterWord}
            onChange={(e) => setFilterWord(e.target.value)}
          />
        </Box>
        <Box mt="10">
          <TodoTable todoList={todoList} deleteTodo={deleteTodo} />
        </Box>
      </Box>
    </Box>
  );
};
