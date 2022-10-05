
import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

import React from "react";
import { useRef } from "react";
import Modal from "react-modal";
import { Box, Button } from "@mui/material"
import { AddModal } from "./AddModal";

Modal.setAppElement("#root");

export const  Home = () => {
  // カスタムフックから必要な変数を取得
  const { todoList, addTodoListItem, deleteTodoListItem } = useTodo();
  
  const inputEl = useRef<HTMLTextAreaElement>(null);

  const handleAddTodoListItem = () => {
    if (inputEl.current?.value === "") {
      return;
    }
    addTodoListItem(inputEl.current!.value, "content");
    inputEl.current!.value = "";
  };

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


  return (
    <div className="TodoApp">
      <h1>Todoリスト</h1>
      <Button onClick={() => setIsUpdateOpen(true)}>追加</Button>
      <Modal 
            isOpen={IsUpdateModalOpen}
            style={customStyles}>
              <AddModal changeIsOpen={setIsUpdateOpen}/>
      </Modal>

      <TodoList todoList={todoList} deleteTodoListItem={deleteTodoListItem} />
    </div>
  );
}

export default Home;