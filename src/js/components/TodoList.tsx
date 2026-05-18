import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
  const todos = [
    { id: 12, task: "そうじ", deadline: "2/23" },
    { id: 34, task: "senntakiu ", deadline: "3/343" },
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} task={todo.task} deadline={todo.deadline} />
      ))}
    </ul>
  );
};