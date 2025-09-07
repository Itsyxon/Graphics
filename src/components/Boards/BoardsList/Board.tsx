import { UserBoard } from '@/types/BoardsTypes';
import React from 'react';
import BoardButtons from './BoardButtons';

const Board = ({ board }: { board: UserBoard }) => {
    return (
        <div
            className="rounded-md p-3 mt-4 w-[512px] flex justify-between items-center"
            style={{
                backgroundColor: board.bgColor || '#6366f1'
            }}
            key={board.id}
        >
            <p className='truncate'>{board.boardName}</p>
            <BoardButtons boardId={board.id} board={board} />
        </div>
    );
};

export default Board;