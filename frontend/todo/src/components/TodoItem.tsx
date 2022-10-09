import { Todo } from "../types/Todo";
import React, { FC } from "react";

type Props = {
  todo: Todo
  deleteTodo: any
}

// 1つのTodo、内容と移動・削除ボタン
export const TodoItem: FC<Props> = ({ todo, deleteTodo }) => {
  // onClickイベントが発生したら、useTodoフックを呼び出す
  const DeleteTodoListItem = () => deleteTodo(todo.id);

  return (
    <>
      {todo.todo}
      <button onClick={DeleteTodoListItem}>削除</button>
    </>
  );
};
