import { Todo } from "../types/Todo";
import React, { FC } from "react";
import { Link } from 'react-router-dom';

type Props = {
  todo: Todo
  deleteTodo: any
}

// 1つのTodo、内容と移動・削除ボタン
export const TodoItem: FC<Props> = ({ todo, deleteTodo }) => {
  // onClickイベントが発生したら、useTodoフックを呼び出す
  const DeleteTodoListItem = () => deleteTodo(todo.id);

  console.log("Item.tsx, todo_list", todo)

  return (
    <>
      <Link to={`/${todo.id}`}>
        {todo.todo}
        <button onClick={handleDeleteTodoListItem}>削除</button>
      </Link>
    </>
  );
};
