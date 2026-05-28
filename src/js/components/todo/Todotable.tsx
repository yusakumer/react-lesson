import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/icons";
import React, { memo } from "react";
import { Todo } from "../../types/type";
import { TodoItem } from "./TodoItem";

type Props = {
  todoList: Todo[];
  deleteTodo: (id: string) => void;
};

export const TodoTable = memo(({ todoList, deleteTodo }: Props) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>タスク名</Th>
            <Th>担当者</Th>
            <Th isNumeric>締切</Th>
            <Th>削除</Th>
          </Tr>
        </Thead>
        <Tbody>
          {todoList.map((todo) => (
            <TodoItem
              id={todo.id}
              key={todo.id}
              task={todo.task}
              person={todo.person}
              deadline={todo.deadline}
              deleteTodo={() => deleteTodo(todo.id)}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
});
