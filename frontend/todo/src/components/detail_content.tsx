import { FC } from "react";

type Props = {
    content: string
}

export const Detail_content: FC<Props> = ({content}) => {

  return (
    <div>
        {content}
    </div>
  );
};

export default Detail_content;