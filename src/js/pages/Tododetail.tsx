import { Box } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../components/todo/layout/Layout";
import { useTodoList } from "../hooks/use-todoList";
import { NotFound } from "./NotFound";

export const TodoDetail = () => {
  let { id } = useParams();
  const { todoList } = useTodoList();
  const todo = todoList.find((todo) => todo.id === id);

  if(!todo) return <NotFound></NotFound>;

  return (
    <Layout title="TODO詳細">
      <Box mt={20} as="section">
        <Box>{todo?.id}</Box>
        <Box>{todo?.task}</Box>
        <Box>{todo?.person}</Box>
        <Box>{todo?.deadline}</Box>
      </Box>
    </Layout>
  );
};
