import { Button, Container } from "@mui/material";
import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "20%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "40%",
  },
};


export const Detail_title: React.FC = () => {

  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  return (
    <div>
      タイトルコンポーネントですよ～
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setEditModalIsOpen(true);
        }}
      >編集</Button>
      <Modal isOpen={editModalIsOpen} style={customStyles}>
        モーダル開いた
      </Modal>

    </div>
  )
}

export default Detail_title
