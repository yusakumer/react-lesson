import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { Todo } from "./pages/Todo";
import { TodoDetail } from "./pages/Tododetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />

      <Route path="/todo" element={<Todo />} />
      <Route path="/todo/:id" element={<TodoDetail />} />
      <Route path="*" element={<NotFound />} />
    </>,
  ),
);

export const App = () => <RouterProvider router={router} />;
