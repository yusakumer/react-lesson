import React from "react";
import { TextField } from "../parts/TextFiled";
import { Todo } from "../../types/type";
import { Button } from "../parts/Button";

type Props = {
  addTodo: (newTask: string, newPerson: string, newDeadline: string) => void;
};

export const NewTodoForm = ({ addTodo }: Props) => {
  const [newTask, setNewTask] = React.useState<string>("");
  const [newPerson, setPerson] = React.useState<string>("");
  const [newDeadline, setDeadline] = React.useState<string>("");

  const addNewTodo = () => {
    addTodo(newTask,newPerson,newDeadline);

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

      <Button color="blue" onClick={addNewTodo}>追加</Button>
    </div>
  );
};
