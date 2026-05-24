import React from "react";
import { Button } from "../components/parts/Button";
import { Heading } from "../components/parts/Heading";
import { NewTodoForm } from "../components/todo/NewTodoForm";
import { TodoList } from "../components/todo/TodoList";
import { useAuth } from "../hooks/use-auth";
import { useTodoList } from "../hooks/use-todoList";

export const Todo = () => {
  const {logout, username} = useAuth();
  const { todoList, addTodo, deleteTodo } = useTodoList();
  return (
    <main className="text-center mx-auto my-0">
      <Heading level="h1">Todo</Heading>
      <div>{username}</div>
      <div>
        <Button onClick={logout} color="red">
          logout
        </Button>
      </div>
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
