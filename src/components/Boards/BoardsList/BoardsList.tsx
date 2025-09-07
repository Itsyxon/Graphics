'use client'
import MainLoader from '@/components/ui/loader';
import LocalStorage from '@/lib/LocalStorage';
import { UserBoard } from '@/types/BoardsTypes';
import React, { useState, useEffect } from 'react';
import BoardButtons from './BoardButtons';

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
        <div>
            {boardsList.map((board) => (
                <div
                    className="rounded-md p-3 mt-4 w-[512px] flex justify-between items-center"
                    style={{
                        backgroundColor: board.bgColor || '#6366f1'
                    }}
                    key={board.id}
                >
                    <p>{board.boardName}</p>
                    <BoardButtons boardId={board.id} boardName={board.boardName} />
                </div>
            ))}
        </div>
    );
};

export default BoardsList;