import { Box, Button, HStack, Input } from "@chakra-ui/react";
import React from "react";

type Props = {
  addTodo: (newTask: string, newPerson: string, newDeadline: string) => void;
};

export const NewTodoForm = ({ addTodo }: Props) => {
  const [newTask, setNewTask] = React.useState<string>("");
  const [newPerson, setPerson] = React.useState<string>("");
  const [newDeadline, setDeadline] = React.useState<string>("");

  const addNewTodo = () => {
    addTodo(newTask, newPerson, newDeadline);

    setNewTask("");
    setPerson("");
    setDeadline("");
  };

  return (
    <HStack spacing="4">
      <Input
        placeholder="タスク名"
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Input
        placeholder="担当者"
        type="text"
        value={newPerson}
        onChange={(e) => setPerson(e.target.value)}
      />
      <Input
        placeholder="締切"
        type="date"
        value={newDeadline}
        onChange={(e) => setDeadline(e.target.value)}
      />

      <Button colorScheme="blue" onClick={addNewTodo} w="40">
        追加
      </Button>
    </HStack>
  );
};
