import { TodoItem } from "./TodoItem";
import { Todo } from "../types/Todo";
import { FC } from "react";

type Props = {
  todoList: Todo[]
  deleteTodoListItem: (id: string) => void
  filter: string
}

// TodoItemをループして表示
// todoListが0件の場合、タイトルとTODOリストを表示しない
export const TodoList: FC<Props> = ({
  todoList,
  deleteTodoListItem,
  filter,
}) => {

  return (
    <>
      {todoList.length !== 0 && (
        <>
          <ul>
            {todoList.map((todo) => (
              (todo.todo.indexOf(filter) > -1 || todo.contents.indexOf(filter) > -1) &&
              <li key={todo.id}>
                <TodoItem todo={todo} key={todo.id} deleteTodoListItem={deleteTodoListItem} />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
