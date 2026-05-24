import React, { useEffect, useState } from "react";
import { TodoList } from "./components/todo/TodoList";
import { Heading } from "./components/parts/Heading";
import { NewTodoForm } from "./components/todo/NewTodoForm";
import { Todo } from "./components/todo/type";
import { useTodoList } from "./components/todo/use-todoList";



export const App = () => {
  const {todoList,addTodo,deleteTodo}  = useTodoList();


  return (
    <main className="text-center mx-auto my-0">
      <Heading level="h1">Todo</Heading>
      <div className="mt-3">
        <Heading level="h2">新規Todo作成</Heading>
        <div className="mt-3">
          <NewTodoForm addTodo={addTodo} />
        </div>
      </div>
      <div className="mt-2">
        <Heading level="h3">TODOLIST</Heading>
        <TodoList deleteTodo={deleteTodo} todoList={todoList} />
      </div>
    </main>
  );
};
