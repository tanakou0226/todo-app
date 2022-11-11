import { FC } from "react";
import { RefObject } from "react";

type Props = {
  buttonText: string
  inputEl: RefObject<HTMLTextAreaElement>
  onClick: () => void
}

export const InputForm: FC<Props> = ({ buttonText, inputEl, onClick }) => {
  return (
    <>
      <textarea ref={inputEl} />
      <button onClick={onClick}>{buttonText}</button>
    </>
  );
};