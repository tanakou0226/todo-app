import { FC, useState } from 'react'
import { useTodo } from '../hooks/useTodo'
import React from 'react'
import { Todo } from '../types/Todo'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

type Props = {
    id: string
    todo: Todo
    changeIsOpen: boolean
}

export const UpdateModal: FC<Props> = ( {  id, todo, changeIsOpen }) => {

    const { updateItem } = useTodo()

    const [title, setTitle] = useState<string>(" ")
    const [content, setContent] = useState<string>(" ")

    const updateTodo = () => {
        updateItem(id, title, content)

    }

    const TitleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ): void => {
        setTitle(event.target.value);
      };

      const ContentChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ): void => {
        setContent(event.target.value);
      };


    return(
        <>
            <form>
                <Box>
                    タイトル
                </Box>
                <Box>
                    <textarea value={title} onChange={TitleChange}></textarea>
                </Box>
                <Box>
                    詳細
                    <textarea value={content} onChange={ContentChange}></textarea>
                </Box>
                <Button type='submit' onClick={updateTodo}>作成</Button>
            </form>
        </>
    )
}

export default UpdateModal