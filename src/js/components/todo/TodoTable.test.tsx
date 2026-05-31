import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { TodoTable } from "./Todotable";

describe("TodoTableのコンポーネントのテスト", () => {
  test("コンポーネントが正しくレンダリングされる事", () => {
    render(
      <BrowserRouter>
        <TodoTable
          todoList={[
            {
              id: "123",
              task: "そうじ",
              person: "ヤマダ",
              deadline: "2024-09-30",
            },
            {
              id: "623",
              task: "洗濯",
              person: "シマ",
              deadline: "2024-08-13",
            },
          ]}
          deleteTodo={() => {}}
        />
      </BrowserRouter>,
    );

    expect(screen.getAllByRole("columnheader")[0].textContent).toBe("ID");
    expect(screen.getAllByRole("columnheader")[1].textContent).toBe("タスク名");
    expect(screen.getAllByRole("columnheader")[2].textContent).toBe("担当者");
    expect(screen.getAllByRole("columnheader")[3].textContent).toBe("締切");
    expect(screen.getAllByRole("columnheader")[4].textContent).toBe("削除");

    expect(screen.getByText("123")).toBeInTheDocument();
    expect(screen.getByText("そうじ")).toBeInTheDocument();
    expect(screen.getByText("ヤマダ")).toBeInTheDocument();
    expect(screen.getByText("2024-09-30")).toBeInTheDocument();

    expect(screen.getByText("623")).toBeInTheDocument();
    expect(screen.getByText("洗濯")).toBeInTheDocument();
    expect(screen.getByText("シマ")).toBeInTheDocument();
    expect(screen.getByText("2024-08-13")).toBeInTheDocument();

    const buttonList = screen.getAllByRole("button", { name: "削除" });
    expect(buttonList).toHaveLength(2);
  });
  test("削除ボタンがクリックされたときに、deleteTodoが呼ばれる事", () => {
    const mockDeleteTodo = jest.fn();
    render(
      <BrowserRouter>
        <TodoTable
          todoList={[
            {
              id: "123",
              task: "そうじ",
              person: "ヤマダ",
              deadline: "2024-09-30",
            },
            {
              id: "623",
              task: "洗濯",
              person: "シマ",
              deadline: "2024-08-13",
            },
          ]}
          deleteTodo={mockDeleteTodo}
        />
      </BrowserRouter>,
    );
    const buttonList = screen.getAllByRole("button", { name: "削除" });
    fireEvent.click(buttonList[0]);
    expect(mockDeleteTodo).toHaveBeenCalledWith("123");
    fireEvent.click(buttonList[1]);
    expect(mockDeleteTodo).toHaveBeenCalledWith("623");
  });
});
