import { Todo } from "../types/Todo";
import React, { FC } from "react";

type Props = {
  todo: Todo
  deleteTodoListItem: any
}

// 1つのTodo、内容と移動・削除ボタン
export const TodoItem: FC<Props> = ({ todo, deleteTodoListItem }) => {
  // onClickイベントが発生したら、useTodoフックを呼び出す
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

  return (
    <>
      {todo.todo}
      <button onClick={handleDeleteTodoListItem}>削除</button>
    </>
  );
};
