import React from "react";

type TodoItemProps = {
  task: string;
  deadline: string;
};

export const TodoItem: React.FC<TodoItemProps> = ({ task, deadline }) => {
  return (
    <li className="text-3xl font-bold underline">
      <p>{task} 〆切: {deadline}</p>
    </li>
  );
};
