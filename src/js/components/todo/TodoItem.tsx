import React from "react";
import { Todo } from "./type";
import { Button } from "../parts/Button";

type TodoItemProps = {
  id: number,
  task: string;
  person: string;
  deadline: string;
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const TodoItem: React.FC<TodoItemProps> = ({
  id,
  task,
  person,
  deadline,
  setTodoList
}) => {

  const deleteTodo = () => {
    () => setTodoList((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <li className="grid grid-cols-4">
      <div>{task}</div>
      <div>{person}</div>
      <div>{deadline}</div>
      <div>
        <Button color="red" onClick={deleteTodo}>削除</Button>
      </div>
    </li>
  );
};
