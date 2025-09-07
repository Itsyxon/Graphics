'use client'
import MainLoader from '@/components/ui/loader';
import LocalStorage from '@/lib/LocalStorage';
import { UserBoard } from '@/types/BoardsTypes';
import React, { useState, useEffect } from 'react';
import Board from './Board';

const BoardsList = () => {
    const [boardsList, setBoardsList] = useState<UserBoard[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const boards = LocalStorage.get<UserBoard[]>('USER_BOARDS');
    useEffect(() => {
        setBoardsList(boards);
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <MainLoader className='m-12' />;
    }

    if (!boardsList || !boardsList.length) {
        return (
            <div className='bg-[#6366f1] rounded-md p-4 mt-4 w-[512px]'>
                У вас пока нет досок!
            </div>
        )
    }
    return (
        <div className='flex flex-col max-h-[calc(100vh-200px)] flex-wrap gap-x-4'>
            {boardsList.map((board) => (
                <Board key={board.id} board={board} />
            ))}
        </div>
    );
};

export default BoardsList;