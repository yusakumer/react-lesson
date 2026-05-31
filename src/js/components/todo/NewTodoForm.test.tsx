import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";
import { NewTodoForm } from "./NewTodoForm";

describe("NewTodoFormコンポーネントのテスト", () => {
  test("コンポーネントが正しくレンダリングされること", () => {
    render(<NewTodoForm addTodo={() => {}} />);
    const taskName = screen.getByPlaceholderText("タスク名");
    const person = screen.getByPlaceholderText("担当者");
    const deadline = screen.getByPlaceholderText("締切");
    const button = screen.getAllByRole("button", { name: "追加" });
    expect(taskName).toBeInTheDocument();
    expect(person).toBeInTheDocument();
    expect(deadline).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  test("input要素に値を入力すると正しくvalueがセットされる事", () => {
    render(<NewTodoForm addTodo={() => {}} />);
    const taskName = screen.getByPlaceholderText("タスク名");
    const person = screen.getByPlaceholderText("担当者");
    const deadline = screen.getByPlaceholderText("締切");
    fireEvent.change(taskName, { target: { value: "そうじ" } });
    fireEvent.change(person, { target: { value: "島" } });
    fireEvent.change(deadline, { target: { value: "2024-09-24" } });

    expect(taskName).toHaveValue("そうじ");
    expect(person).toHaveValue("島");
    expect(deadline).toHaveValue("2024-09-24");
  });
  test("追加ボタンをクリックするとaddTodo関数が実行され,input要素のvalueが空になる事", () => {
    const mockAddTodo = jest.fn();
    render(<NewTodoForm addTodo={mockAddTodo} />);
    const taskName = screen.getByPlaceholderText("タスク名");
    const person = screen.getByPlaceholderText("担当者");
    const deadline = screen.getByPlaceholderText("締切");
    const button = screen.getByRole("button", { name: "追加" });
    fireEvent.change(taskName, { target: { value: "そうじ" } });
    fireEvent.change(person, { target: { value: "島" } });
    fireEvent.change(deadline, { target: { value: "2024-09-24" } });

    fireEvent.click(button);

    expect(mockAddTodo).toHaveBeenCalledWith("そうじ","島","2024-09-24");

    expect(taskName).toHaveValue("");
    expect(person).toHaveValue("");
    expect(deadline).toHaveValue("");
  });
});
