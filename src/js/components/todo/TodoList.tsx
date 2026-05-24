import React from "react";
import { TodoItem } from "./TodoItem";
import { Todo } from "./type";

type Props = {
  todoList: Todo[];
  deleteTodo: (id:number) => void;
};

export const TodoList = ({ todoList, deleteTodo }: Props) => {
  return (
    <ul className=" bg-emerald-400 p-4 rounded-sm">
      <li className="grid grid-cols-4 font-bold">
        <div>タスク名</div>
        <div>担当者</div>
        <div>〆切</div>
        <div>削除</div>
      </li>
      {todoList.map((todo) => (
        <TodoItem
          id={todo.id}
          key={todo.id}
          task={todo.task}
          person={todo.person}
          deadline={todo.deadline}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};
