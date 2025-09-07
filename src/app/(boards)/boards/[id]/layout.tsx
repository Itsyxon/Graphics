'use client'
import LocalStorage from '@/lib/LocalStorage';
import { UserBoard } from '@/types/BoardsTypes';
import { CircleArrowLeft } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';

const BoardLayout = () => {
    const params = useParams()
    const userBoards = LocalStorage.get('USER_BOARDS') as UserBoard[]
    const board = userBoards?.find((el) => el.id == Number(params.id))
    const router = useRouter()

    if (!board) {
        return null
    }


    return (
        <div className='p-4 text-2xl bg-[#23233a] flex gap-2 items-center'>
            <CircleArrowLeft onClick={() => router.push('/boards')} className='cursor-pointer' />
            <h1 className='text-lg'> Доска: {board?.boardName || 'Н/Д'}</h1>
        </div >
    );
};

export default BoardLayout;