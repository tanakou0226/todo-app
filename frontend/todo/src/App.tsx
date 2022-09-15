import { useRef } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";


import { useTodo } from "./hooks/useTodo";
import { Todo } from "./types/Todo";
import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";

function App() {
  // カスタムフックから必要な変数を取得
  const { todoList, addTodoListItem, deleteTodoListItem } = useTodo();

  const inputEl = useRef<HTMLTextAreaElement>(null);

  const handleAddTodoListItem = () => {
    if (inputEl.current?.value === "") {
      return;
    }
    addTodoListItem(inputEl.current!.value, "content", Date());
    inputEl.current!.value = "";
  };

  return (
    <>
      <TodoAdd buttonText="+ 追加" inputEl={inputEl} handleAddTodoListItem={handleAddTodoListItem} />
      <TodoList todoList={todoList} deleteTodoListItem={deleteTodoListItem} title="TODOリスト" as="h2" />
    </>
  );
}

export default App;