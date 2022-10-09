import React, { FC } from "react"
import { Todo } from "../types/Todo"
import {useTodo} from "../hooks/useTodo"
import { Box, Button } from "@mui/material"
import Modal from "react-modal"

export const Detail: FC = () => {

  const {todoList} = useTodo();
  
  const DetailTodo = todoList.filter((todo: Todo) => todo.id == "9d13b651-2443-4332-bdf2-53f16619a8b4")
  //Modal操作のための変数
  const [IsUpdateModalOpen, setIsUpdateOpen] = React.useState(false);

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

  console.log(DetailTodo[0])

  return (
    <>
      <Box>
        <Box >
          ここにタイトルを表示
          <Button onClick={() => setIsUpdateOpen(true)}>編集</Button>
          <Modal 
            isOpen={IsUpdateModalOpen}
            style={customStyles}>
            モーダル開いた
          </Modal>
        </Box>
        <Box>
          ここに詳細を表示
        </Box>
      </Box>
    </>
  );
};

export default Detail;