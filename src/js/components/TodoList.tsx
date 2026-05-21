import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
  const todos = [
    { id: 12, task: "そうじ", person: "yamada", deadline: "2/23" },
    { id: 34, task: "senntakiu ", person: "shima", deadline: "3/343" },
  ];

  return (
      <ul className="mt-3 ml-4 bg-emerald-400 p-4 rounded-sm">
        <li className="grid grid-cols-3 font-bold">
          <div>タスク名</div>
          <div>担当者</div>
          <div>〆切</div>
        </li>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            task={todo.task}
            person={todo.person}
            deadline={todo.deadline}
          />
        ))}
        </ul>
  );
};
