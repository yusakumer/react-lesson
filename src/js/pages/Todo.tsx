import { Box, Heading, Input } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/todo/layout/Layout";
import { NewTodoForm } from "../components/todo/NewTodoForm";
import { TodoTable } from "../components/todo/Todotable";
import { useTodoList } from "../hooks/use-todoList";

export const Todo = () => {
  const { todoList, addTodo, deleteTodo, filterWord, setFilterWord } =
    useTodoList();

  return (
    <Layout title="TODO">
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
    </Layout>
  );
};
