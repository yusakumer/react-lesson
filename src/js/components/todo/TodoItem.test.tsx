import { Table, Tbody } from "@chakra-ui/react";
import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { TodoItem } from "./TodoItem";

const mockUseAuthStore = jest.fn();

jest.mock("../../stores/use-auth-store", () => {
  return {
    useAuthStore: () => mockUseAuthStore(),
  };
});

describe("TodoItemコンポーネントのテスト", () => {
  beforeEach(() => mockUseAuthStore.mockReturnValue({username:"ヤマダ"}));
  test("コンポーネントが正しくレンダリングされる事", () => {
    render(
      <BrowserRouter>
        <Table>
          <Tbody>
            <TodoItem
              id="1233"
              task="そうじ"
              person="ヤマダ"
              deadline="2024-09-30"
              deleteTodo={() => {}}
            />
          </Tbody>
        </Table>
      </BrowserRouter>,
    );

    expect(screen.getByText("1233")).toBeInTheDocument();
    expect(screen.getByText("そうじ")).toBeInTheDocument();
    expect(screen.getByText("ヤマダ")).toBeInTheDocument();
    expect(screen.getByText("2024-09-30")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "削除" })).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/todo/1233");
  });
  test("usernameとpersonが一致しない場合,colorがredにならない事", () => {
    render(
      <BrowserRouter>
        <Table>
          <Tbody>
            <TodoItem
              id="1233"
              task="そうじ"
              person="ヤマダ"
              deadline="2024-09-30"
              deleteTodo={() => {}}
            />
          </Tbody>
        </Table>
      </BrowserRouter>,
    );

    expect(screen.getByRole("row")).not.toHaveStyle("color:red");
  });
  test("usernameとpersonが一致した場合,colorがredになる事", () => {
    render(
      <BrowserRouter>
        <Table>
          <Tbody>
            <TodoItem
              id="1233"
              task="そうじ"
              person="ヤマダ"
              deadline="2024-09-30"
              deleteTodo={() => {}}
            />
          </Tbody>
        </Table>
      </BrowserRouter>,
    );

    expect(screen.getByRole("row")).toHaveStyle("color:red");
  });
  test("削除ボタンがクリックされたときに、deleteTodoがよばれること", () => {
    const mockDeleteTodo = jest.fn();
    render(
      <BrowserRouter>
        <Table>
          <Tbody>
            <TodoItem
              id="1233"
              task="そうじ"
              person="ヤマダ"
              deadline="2024-09-30"
              deleteTodo={mockDeleteTodo}
            />
          </Tbody>
        </Table>
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByRole("button",{name:"削除"}))
    expect(mockDeleteTodo).toHaveBeenCalledWith("1233");
  });
});
