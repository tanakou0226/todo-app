import { useState, useEffect } from "react";
import { ulid } from "ulid";

import * as todoData from "../apis/todos";
import { Todo } from "../types/Todo";

export const useTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    todoData.getAllTodosData().then((todo: Todo[]) => {
      setTodoList([...todo].reverse());
    });
  }, []);

  const addTodoListItem = (todo: string, todoContent: string, created_at: string) => {
    // あたらしいitemを作成する
    const newTodoItem = { id: ulid(), todo: todo, contents: todoContent, created_data: created_at };

    // サーバーの追加APIを呼ぶ
    todoData.addTodoData(newTodoItem).then((addTodo) => {
      // addTodoをtodoListに追加してstateにセットする
      setTodoList([addTodo, ...todoList]);
    });
  };

  const deleteTodoListItem = (id: string) => {
    // サーバーの削除APIを呼ぶ
    todoData.deleteTodoData(id).then((deletedid) => {
      const newTodoList = todoList.filter((item) => item.id !== deletedid);
      // 1件削除された新しいtodoListに追加してstateにセットする
      setTodoList(newTodoList);
    });
  };

  // 作成した関数を返す
  return { todoList, addTodoListItem, deleteTodoListItem };
};
