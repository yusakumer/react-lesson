import { useCallback, useEffect, useMemo, useState } from "react";
import { Todo } from "../types/type";

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>(() => {
    console.log("修正");
    const todoListData = localStorage.getItem("todo-list");
    return todoListData ? JSON.parse(todoListData) : [];
  });
  const [filterWord, setFilterWord] = useState<string>("");

  // Todolistが更新されるたびに,Localstorageにデータを保存する
  useEffect(() => {
    console.log("bbb");
    localStorage.setItem("todo-list", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = useCallback((newTask: string, newPerson: string, newDeadline: string) => {
    setTodoList((prev: Todo[]) => [
      ...prev,
      {
        id: Date.now(),
        task: newTask,
        person: newPerson,
        deadline: newDeadline,
      },
    ]);
  },[]);

  const deleteTodo = useCallback(
    (id: number) =>
      setTodoList((prev) => prev.filter((todo) => todo.id !== id)),
    [],
  );

  const filteredTodoList = useMemo(
    () =>
      todoList.filter(
        (todo) =>
          todo.task.includes(filterWord) || todo.person.includes(filterWord),
      ),
    [todoList, filterWord],
  );

  return {
    todoList: filteredTodoList,
    addTodo,
    deleteTodo,
    filterWord,
    setFilterWord,
  };
};
