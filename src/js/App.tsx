import React from "react";
import { useTodoList } from "./hooks/use-todoList";
import { useAuth } from "./hooks/use-auth";
import { Login } from "./pages/Login";
import { Todo } from "./pages/Todo";

export const App = () => {
  const { todoList, addTodo, deleteTodo } = useTodoList();
  const { isLoggedIn, logout, username } = useAuth();

  if (!isLoggedIn) {
    return <Login />;
  }

  return <Todo />;
};
