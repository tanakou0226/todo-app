import React, { FC } from "react"
import { Todo } from "../types/Todo"
import {useTodo} from "../hooks/useTodo"
import { Box, Button } from "@mui/material"
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import { UpdateModal} from "./UpdateModal"


export const Detail: FC = () => {

  const { id } = useParams();


  //Modal操作のための変数
  const [IsUpdateModalOpen, setIsUpdateOpen] = React.useState(false);

  const { todoList} = useTodo()

  const item = todoList.filter((todo: Todo) => todo.id == id)[0]

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



  return (
    <>
      {todoList.length !== 0 && (
      <Box>
        <Box >
          {item.todo}
          <Button onClick={() => setIsUpdateOpen(true)}>編集</Button>
          <Modal 
            isOpen={IsUpdateModalOpen}
            style={customStyles}>
              < UpdateModal id={item.id} todo={item} changeIsOpen={setIsUpdateOpen}/>
            
          </Modal>
        </Box>
        <Box>
          {item.contents}
        </Box>
      </Box>
      )}
    </>
  );
};

export default Detail;