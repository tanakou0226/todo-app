import { Todo } from "../types/Todo";

// 1つのTodo、内容と移動・削除ボタン
export const TodoItem = ({ todo, deleteTodoListItem }: { todo:  any; deleteTodoListItem: any }) => {
  // onClickイベントが発生したら、useTodoフックを呼び出す
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

  return (
    <>
      {todo.contents}
      <button onClick={handleDeleteTodoListItem}>削除</button>
    </>
  );
};
