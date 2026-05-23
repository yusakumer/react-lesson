import React, { useEffect, useState } from "react";
import { TodoList } from "./components/todo/TodoList";
import { Heading } from "./components/parts/Heading";
import { NewTodoForm } from "./components/todo/NewTodoForm";
import { Todo } from "./components/todo/type";



export const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  // マウント時に、一度だけlocalstrageにtodo一覧のデータを取得する
  useEffect(() => {
    const todoListData = localStorage.getItem("todo-list");
    if(todoListData){
        setTodoList(JSON.parse(todoListData));
    }
  },[])

  // Todolistが更新されるたびに,Localstorageにデータを保存する
  useEffect(() => {
    localStorage.setItem("todo-list",JSON.stringify(todoList))
  })

  useEffect(() => {
    console.log("compornets");

    return () => {
        console.log("マウント");

    };
  },[todoList]);

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
        <TodoList setTodoList={setTodoList} todoList={todoList} />
      </div>
    </main>
  );
};
