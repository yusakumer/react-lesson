import React from "react";
import { TodoList } from "./components/TodoList";
import { Heading } from "./components/Heading";

export const App = () => {
  return (
    <main className="text-center mx-auto my-0 w-full">
      <Heading level="h1">Todo</Heading>
      <TodoList />
    </main>
  );
};
