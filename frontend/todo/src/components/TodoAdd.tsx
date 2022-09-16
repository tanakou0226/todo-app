import React, { FC } from "react";
import { RefObject } from "react";

type Props = {
  buttonText: string
  inputEl: RefObject<HTMLTextAreaElement>
  handleAddTodoListItem: () => void
}

export const TodoAdd: FC<Props> = ({ buttonText, inputEl, handleAddTodoListItem }) => {
  return (
    <>
      <textarea ref={inputEl} />
      <button onClick={handleAddTodoListItem}>{buttonText}</button>
    </>
  );
};