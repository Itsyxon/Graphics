import ConfirmDeleteBoard from '@/components/Modal/ConfirmDeleteBoard';
import { Button } from '@/components/ui/button';
import { useModal } from '@/context/ModalContext';
import { XIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const BoardButton = ({ boardId, boardName }: { boardId: number, boardName: string }) => {
    const router = useRouter()

    const { openModal } = useModal()
    return (
        <div className='flex gap-2 items-center'>
            <Button variant='white' onClick={() => router.push(`/boards/${boardId}`)}>Перейти</Button>
            <Button variant='destructive' onClick={() => openModal(<ConfirmDeleteBoard boardId={boardId} />, `Удаление доски ${boardName}`)}><XIcon /></Button>
        </div >
    );
};

export default BoardButton;