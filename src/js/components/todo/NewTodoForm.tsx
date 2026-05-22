import React from "react";
import { TextField } from "../parts/TextFiled";
import { Todo } from "./type";

type Props = {
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const NewTodoForm = ({ setTodoList }: Props) => {
  const [newTask, setNewTask] = React.useState<string>("");
  const [newPerson, setPerson] = React.useState<string>("");
  const [newDeadline, setDeadline] = React.useState<string>("");

  const addNewTodo = () => {
    setTodoList((prev: Todo[]) => [
      ...prev,
      {
        id: Date.now(),
        task: newTask,
        person: newPerson,
        deadline: newDeadline,
      },
    ]);

    setNewTask("");
    setPerson("");
    setDeadline("");
  };

  console.log(newTask);

  return (
    <div className="flex">
      <TextField
        id="new-task"
        label="タスク名"
        type="text"
        value={newTask}
        onChange={setNewTask}
      />
      <TextField
        id="new-person"
        label="担当者"
        type="text"
        value={newPerson}
        onChange={setPerson}
      />
      <TextField
        id="new-deadline"
        label="〆切"
        type="date"
        value={newDeadline}
        onChange={setDeadline}
      />
      <button className="border bg-pink-500" onClick={addNewTodo}>
        追加
      </button>
    </div>
  );
};
