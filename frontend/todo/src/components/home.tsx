
import { useTodo } from "../hooks/useTodo";
import { Todo } from "../types/Todo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import React, { FC } from "react";

import { useRef } from "react";

function Home() {
  // カスタムフックから必要な変数を取得
  const { todoList, addTodoListItem, deleteTodoListItem } = useTodo();

  const inputEl = useRef<HTMLTextAreaElement>(null);

  const AddTodoListItem = () => {
    if (inputEl.current?.value === "") {
      return;
    }
    addTodoListItem(inputEl.current!.value, "content", Date());
    inputEl.current!.value = "";
  };

  return (
    <>
      <TodoAdd buttonText="+ 追加" inputEl={inputEl} AddTodoListItem={AddTodoListItem} />
      <TodoList todoList={todoList} deleteTodoListItem={deleteTodoListItem} />
    </>
  );
}

export default Home;