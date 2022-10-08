
import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

import React from "react";
import Modal from "react-modal";
import { Box, Button } from "@mui/material"
import { AddModal } from "./AddModal";
import { Filter} from "./filter"

Modal.setAppElement("#root");

export const  Home = () => {
  // カスタムフックから必要な変数を取得
  const { todoList, addTodoListItem, deleteTodoListItem } = useTodo();
  
    //Modalの見た目
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };

    const [IsUpdateModalOpen, setIsUpdateOpen] = React.useState(false);
    const [filter, setFilter] = React.useState<string>("")

    const changeFilter = (filter: string) => {
      setFilter(filter)
    }


  return (
    <div className="TodoApp">
      <h1>Todoリスト</h1>
      <Filter setKeyword={changeFilter} />
      <Button onClick={() => setIsUpdateOpen(true)}>追加</Button>
      <Modal 
            isOpen={IsUpdateModalOpen}
            style={customStyles}>
              <AddModal changeIsOpen={setIsUpdateOpen}/>
      </Modal>

      <TodoList todoList={todoList} deleteTodoListItem={deleteTodoListItem} filter={filter} />
    </div>
  );
}

export default Home;