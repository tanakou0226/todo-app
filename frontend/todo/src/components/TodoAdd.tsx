import React, { FC } from "react";
import { RefObject } from "react";

export const TodoAdd = ({ buttonText, inputEl, handleAddTodoListItem }: { buttonText: string; inputEl: RefObject<HTMLTextAreaElement>; handleAddTodoListItem: () => void }) => {
  return (
    <>
      <textarea ref={inputEl} />
      <form>
        <input type="text" />
      </form>
      <button onClick={handleAddTodoListItem}>{buttonText}</button>
    </>
  );
};