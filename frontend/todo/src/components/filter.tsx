import { FC } from "react"

type Props = {
    setKeyword: (keyword: string) => void
}

export const Filter: FC<Props> = ({ setKeyword } ) => {

    const FilterChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ): void => {
        setKeyword(event.target.value);
      };
    return(
        <>
            <textarea onChange={FilterChange}>

            </textarea>
        </>
    )
}