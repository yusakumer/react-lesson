import React from "react";
import { TodoItem } from "./TodoItem";
import { Todo } from "./type";


type Props = {
    todoList: Todo[]
}

export const TodoList = ({todoList}:Props) => {

  return (
      <ul className=" bg-emerald-400 p-4 rounded-sm">
        <li className="grid grid-cols-3 font-bold">
          <div>タスク名</div>
          <div>担当者</div>
          <div>〆切</div>
        </li>
        {todoList.map((todo) => (
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
