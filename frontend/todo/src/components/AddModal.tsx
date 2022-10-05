import { FC, useState } from 'react'
import { useTodo } from '../hooks/useTodo'
import React from 'react'
import { Todo } from '../types/Todo'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

type Props = {
    changeIsOpen: boolean
}

export const AddModal: FC<Props> = ( { changeIsOpen }) => {

    const { addTodoListItem } = useTodo()
    const [title, setTitle] = useState<string>(" ")
    const [content, setContent] = useState<string>(" ")
    const addTodo = () => {
        addTodoListItem(title, content)
        changeIsOpen = false
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
                <Button type='submit' onClick={addTodo}>作成</Button>
            </form>
        </>
    )
}

export default AddModal