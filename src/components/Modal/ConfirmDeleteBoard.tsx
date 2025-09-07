import React from 'react';
import { Button } from '../ui/button';
import { useModal } from '@/context/ModalContext';
import LocalStorage from '@/lib/LocalStorage';
import { UserBoard } from '@/types/BoardsTypes';

const ConfirmDeleteBoard = ({ boardId }: { boardId: number }) => {
    const { closeModal } = useModal()
    const boards = LocalStorage.get('USER_BOARDS') as UserBoard[]
    const handleDeleteBoard = (boardId: number) => {
        LocalStorage.set('USER_BOARDS', boards.filter((item) => item.id != boardId))
        closeModal()
        location.reload() // иммитирование повторного GET-запроса по ключу после мутации. Чуть позже добавлю стейт-менеджер и сделаю синхронизацию
    }
    return (
        <div className='flex flex-col gap-2'>
            <p>Подтверждаете удаление?</p>
            <div className='flex gap-2 self-end mt-3'>
                <Button variant='destructive' onClick={() => handleDeleteBoard(boardId)}>Удалить</Button>
                <Button variant='white' onClick={closeModal}>Отменить</Button>
            </div>
        </div>
    );
};

export default ConfirmDeleteBoard;