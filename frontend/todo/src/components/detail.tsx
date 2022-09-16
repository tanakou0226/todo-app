import React, { FC } from "react";
import { Todo } from "../types/Todo";
import {useTodo} from "../hooks/useTodo"

export const Detail: FC = () => {

  const {todoList} = useTodo();
  
  const detail_todo = todoList.filter((todo: Todo) => todo.id == "df22e28f-0cbc-4c18-82c5-93246ce94ddb")

  console.log(detail_todo[0])

  return (
    <>
        <h1>test</h1>
    </>
  );
};

export default Detail;