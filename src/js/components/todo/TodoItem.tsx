import { Button, Tr } from "@chakra-ui/react";
import { Td } from "@chakra-ui/react/table";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../stores/use-auth-store";

type Props = {
  id: string;
  task: string;
  person: string;
  deadline: string;
  deleteTodo: (id: string) => void;
};

export const TodoItem = memo(
  ({ id, task, person, deadline, deleteTodo }: Props) => {
    const { username } = useAuthStore();

    return (
      <Tr color={username === person ? "red" : ""}>
        <Td>
          <Link to={`/todo/${id}`}>{id}</Link>
        </Td>
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
