import React from "react";
import { Todo } from "../../types/type";
import { Button } from "../parts/Button";
import { useAuth } from "../../hooks/use-auth";

type Props = {
  id: number,
  task: string;
  person: string;
  deadline: string;
  deleteTodo: (id:number) => void;
};

export const TodoItem= ({
  id,
  task,
  person,
  deadline,
  deleteTodo
}:Props) => {

  const{username} = useAuth();
  const style = username === person ? "text-red-600 font-bold": "";


  return (
    <li className="grid grid-cols-4">
      <div>{task}</div>
      <div className={style}>{person}</div>
      <div>{deadline}</div>
      <div>
        <Button color="red" onClick={() => deleteTodo(id)}>削除</Button>
      </div>
    </li>
  );
};
