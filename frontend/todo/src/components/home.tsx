
import { useTodo } from "../hooks/useTodo";
import { InputForm } from "./InputForm";
import { TodoList } from "./TodoList";

import React from "react";
import Modal from "react-modal";
import { Button } from "@mui/material"
import { AddModal } from "./AddModal";

Modal.setAppElement("#root");

export const  Home = () => {
  // カスタムフックから必要な変数を取得
  const { todoList, deleteTodoListItem } = useTodo();

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

    const [IsUpdateModalOpen, setIsAddOpen] = React.useState(false);


  return (
    <div className="TodoApp">
      <h1>Todoリスト</h1>
      <Button onClick={() => setIsAddOpen(true)}>追加</Button>
      <Modal 
            isOpen={IsUpdateModalOpen}
            style={customStyles}>
              <AddModal changeIsOpen={setIsAddOpen}/>
      </Modal>

      <TodoList todoList={todoList} deleteTodoListItem={deleteTodoListItem} />
    </div>
  );
}

export default Home;