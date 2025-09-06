'use client'
import React from 'react';
import { Button } from '../ui/button';
import { useModal } from '@/context/ModalContext';
import CreateBoardContent from '../Modal/CreateBoardContent';
import BoardsList from './BoardsList/BoardsList';

const Boards = () => {
    const { openModal } = useModal()
    return (
        <div>
            <div className='flex flex-col items-start p-4'>
                <Button onClick={() => openModal(<CreateBoardContent />, 'Создание доски')} variant='white'>Создать новую доску</Button>
                <BoardsList />
            </div>
        </div >
    );
};

export default Boards;