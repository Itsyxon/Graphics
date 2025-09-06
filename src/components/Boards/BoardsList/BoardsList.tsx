import { Button } from '@/components/ui/button';
import LocalStorage from '@/lib/LocalStorage';
import { UserBoard } from '@/types/BoardsTypes';
import React from 'react';

const BoardsList = () => {
    const boardsList: UserBoard[] | undefined = LocalStorage.get('USER_BOARDS')

    if (!boardsList) {
        return <div className='bg-[#6366f1] rounded-md p-4 mt-4 w-[512px]'>У вас пока нет досок!</div>
    }
    return (
        <div>
            {boardsList.map((board) => (
                <div className='bg-[#6366f1] rounded-md p-3 mt-4 w-[512px] flex justify-between items-center' key={board.id}>
                    <p>{board.boardName}</p>
                    <Button variant='white'>Перейти</Button>
                </div>
            ))}
        </div>
    );
};

export default BoardsList;