import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";

const mockUseAuthStore = jest.fn();

jest.mock("../../../stores/use-auth-store", () => {
  return {
    useAuthStore: () => mockUseAuthStore(),
  };
});

describe("Layoutコンポーネントのテスト", () => {
  test("コンポーネントが正しくレンダリングされている事", () => {
    mockUseAuthStore.mockReturnValue({
      isLoggedIn:true,
      logout:() => {},
      username: "yamada",
      isLoginDone:true
    });
    render(
      <BrowserRouter>
        <Layout title="Todoリスト">
          <div>コンポーネントテスト children</div>
        </Layout>
      </BrowserRouter>,
    );

    expect(screen.getByRole("heading")).toHaveTextContent("Todoリスト");
  });
  test("isLoginDoneがtrueで、!isLoggedInがfalseの場合、/loginに遷移する", () => {});
  test("isLoginDoneがfalseで、!isLoggedInがfalseの場合,なにもレンダリングされない", () => {});
  test("ログアウトボタンをクリックされると、logout関数が呼ばれる事", () => {});
});
