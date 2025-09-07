'use client'
import MainLoader from '@/components/ui/loader';
import LocalStorage from '@/lib/LocalStorage';
import { UserBoard } from '@/types/BoardsTypes';
import React, { useState, useEffect } from 'react';
import BoardButton from './BoardButton';

const BoardsList = () => {
    const [boardsList, setBoardsList] = useState<UserBoard[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const boards = LocalStorage.get<UserBoard[]>('USER_BOARDS');
    useEffect(() => {
        setBoardsList(boards);
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <MainLoader />;
    }

    if (!boardsList || !boardsList.length) {
        return (
            <div className='bg-[#6366f1] rounded-md p-4 mt-4 w-[512px]'>
                У вас пока нет досок!
            </div>
        )
    }

    return (
        <div>
            {boardsList.map((board) => (
                <div
                    className='bg-[#6366f1] rounded-md p-3 mt-4 w-[512px] flex justify-between items-center'
                    key={board.id}
                >
                    <p>{board.boardName}</p>
                    <BoardButton boardId={board.id} boardName={board.boardName} />
                </div>
            ))}
        </div>
    );
};

export default BoardsList;