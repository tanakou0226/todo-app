
import { useTodo } from "../hooks/useTodo";
import { InputForm } from "./InputForm";
import { TodoList } from "./TodoList";

import React from "react";
import { useRef } from "react";

export const  Home = () => {
  // カスタムフックから必要な変数を取得
  const { todoList, addTodoListItem, deleteTodoListItem } = useTodo();
  
  const inputEl = useRef<HTMLTextAreaElement>(null);

  const AddTodoListItem = () => {
    if (inputEl.current?.value === "") {
      return;
    }
    addTodoListItem(inputEl.current!.value, "content");
    inputEl.current!.value = "";
  };


  return (
    <>
      <div className="TodoApp">
        <h1>Todoリスト</h1>
        <InputForm buttonText="+ 追加" inputEl={inputEl} onClick={AddTodoListItem} />
        <TodoList todoList={todoList} deleteTodoListItem={deleteTodoListItem} />
      </div>
    </>
  );
}

export default Home;