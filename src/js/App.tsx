import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useAuth } from "./hooks/use-auth";
import { useTodoList } from "./hooks/use-todoList";
import { Login } from "./pages/Login";
import { Todo } from "./pages/Todo";
import { TodoDetail } from "./pages/Tododetail";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Navigate to="/todo" replace={true} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/todo/:id" element={<TodoDetail />} />
      <Route path="*" element={<NotFound />} />
    </>,
  ),
);

export const App = () => <RouterProvider router={router}/>;
