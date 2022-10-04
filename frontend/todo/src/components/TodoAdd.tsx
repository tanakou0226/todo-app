import React, { FC } from "react";
import { RefObject } from "react";

type Props = {
  buttonText: string
  inputEl: RefObject<HTMLTextAreaElement>
  AddTodoListItem: () => void
}

export const TodoAdd: FC<Props> = ({ buttonText, inputEl, AddTodoListItem }) => {
  return (
    <>
      <textarea ref={inputEl} />
      <button onClick={AddTodoListItem}>{buttonText}</button>
    </>
  );
};