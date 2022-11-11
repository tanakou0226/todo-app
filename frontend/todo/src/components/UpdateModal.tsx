import { FC, useState } from 'react'
import { useTodo } from '../hooks/useTodo'
import React from 'react'
import { Todo } from '../types/Todo'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

type Props = {
    id: string
    todo: Todo
    changeIsOpen: (IsOpen: boolean) => void
}

export const UpdateModal: FC<Props> = ( {  id, todo, changeIsOpen }) => {

    const { updateItem } = useTodo()

    const [title, setTitle] = useState<string>(" ")
    const [content, setContent] = useState<string>(" ")

    const updateTodo = () => {
        updateItem(id, title, content)

    }

    const changeTitle = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ): void => {
        setTitle(event.target.value);
      };

      const changeContent = (
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
                    <textarea value={title} onChange={changeTitle}></textarea>
                </Box>
                <Box>
                    詳細
                </Box>
                <Box>
                <textarea value={content} onChange={changeContent}></textarea>
                </Box>
                <Button onClick={() => changeIsOpen(false)}>削除</Button>
                <Button type='submit' onClick={updateTodo}>作成</Button>

            </form>
        </>
    )
}

export default UpdateModal