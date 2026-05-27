import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { useAuth } from "./hooks/use-auth";
import { useTodoList } from "./hooks/use-todoList";
import { Login } from "./pages/Login";
import { Todo } from "./pages/Todo";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/todo" element={<Todo />} />
    </>,
  ),
);

export const App = () => {
  const { todoList, addTodo, deleteTodo } = useTodoList();
  const { isLoggedIn, logout, username } = useAuth();

  if (!isLoggedIn) {
    return <Login />;
  }

  return <Todo />;
};
