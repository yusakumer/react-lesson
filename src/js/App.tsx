import React, { useState } from "react";
import { TodoList } from "./components/todo/TodoList";
import { Heading } from "./components/parts/Heading";
import { NewTodoForm } from "./components/todo/NewTodoForm";
import { Todo } from "./components/todo/type";



export const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  return (
    <main className="text-center mx-auto my-0">
      <Heading level="h1">Todo</Heading>
      <div className="mt-3">
        <Heading level="h2">新規Todo作成</Heading>
        <div className="mt-3">
          <NewTodoForm setTodoList={setTodoList} />
        </div>
      </div>
      <div className="mt-2">
        <Heading level="h3">TODOLIST</Heading>
        <TodoList todoList={todoList} />
      </div>
    </main>
  );
};
