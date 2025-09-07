import ConfirmDeleteBoard from '@/components/Modal/ConfirmDeleteBoard';
import EditBoardContent from '@/components/Modal/EditBoardContent';
import { Button } from '@/components/ui/button';
import { useModal } from '@/context/ModalContext';
import { UserBoard } from '@/types/BoardsTypes';
import { PaletteIcon, XIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const BoardButtons = ({ board, boardId }: { board: UserBoard, boardId: number }) => {
    const router = useRouter()

    const { openModal } = useModal()
    return (
        <div className='flex gap-2 items-center [&>*]:border-black [&>*]:border'>
            <Button variant='white' onClick={() => router.push(`/boards/${boardId}`)}>Перейти</Button>
            <Button variant='default' onClick={() => openModal(<EditBoardContent board={board} boardId={boardId} />, `Изменение доски ${board.boardName}`)}><PaletteIcon /></Button>
            <Button variant='destructive' onClick={() => openModal(<ConfirmDeleteBoard boardId={boardId} />, `Удаление доски ${board.boardName}`)}><XIcon /></Button>
        </div >
    );
};

export default BoardButtons;