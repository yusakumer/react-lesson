import { act, renderHook } from "@testing-library/react";
import { useTodoList } from "./use-todoList";

describe("useTodoListフックのテスト", () => {
  beforeEach(() => {
    const storage: Record<string, string> = {};
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: (key: string) => {
          return storage[key];
        },
        setItem: (key: string, value: string) => {
          storage[key] = value;
        },
      },
      writable: true,
    });
    const initData = [
      {
        id: "123",
        task: "そうじ",
        person: "yamada",
        deadline: "2026-09-12",
      },
    ];
    localStorage.setItem("todo-list", JSON.stringify(initData));
  });
  test("マウント時に、一度だけlocalStorageからTODO一覧のデータを取得すること", () => {
    const { result } = renderHook(() => useTodoList());
    expect(result.current.todoList).toStrictEqual([
      {
        id: "123",
        task: "そうじ",
        person: "yamada",
        deadline: "2026-09-12",
      },
    ]);

    expect(result.current.filterWord).toBe("");
  });
  test("addTodoが実行されると、todoListとlocalstorageが更新される事", () => {

    const { result } = renderHook(() => useTodoList());
    act(() => {
        result.current.addTodo("洗濯","朝の","2025-03-23");
    })

    expect(result.current.todoList).toHaveLength(2)

    const newTodo = result.current.todoList[1];
    expect(newTodo.task).toBe("洗濯")
    expect(newTodo.person).toBe("朝の")
    expect(newTodo.deadline).toBe("2025-03-23")
    
  });
  test("deleteTodoが実行されると、todoListとlocalstorageが更新される事", () => {});
  test("setFilterWordが実行されると、絞り込まれたtodoListが返却される事", () => {});
});
