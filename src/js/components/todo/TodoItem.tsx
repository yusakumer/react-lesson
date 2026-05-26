import { Button, Tr } from "@chakra-ui/react";
import { Td } from "@chakra-ui/react/table";
import React, { memo } from "react";
import { useAuth } from "../../hooks/use-auth";

type Props = {
  id: number;
  task: string;
  person: string;
  deadline: string;
  deleteTodo: (id: number) => void;
};

export const TodoItem = memo(
  ({ id, task, person, deadline, deleteTodo }: Props) => {
    const { username } = useAuth();

    return (
      <Tr color={username === person ? "red":""}>
        <Td>{task}</Td>
        <Td>{person}</Td>
        <Td isNumeric>{deadline}</Td>
        <Td>
          <Button color="red" onClick={() => deleteTodo(id)}>
            削除
          </Button>
        </Td>
      </Tr>
    );
  },
);
