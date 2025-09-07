'use client'
import React from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const RootText = () => {
    const router = useRouter()
    return (
        <div className='absolute left-1/2 top-1/2 -translate-1/2 text-center text-[#FFFFF2] flex flex-col gap-1'>
            <h1 className='md:text-5xl text-xl uppercase font-medium'>Добро пожаловать на платформу Графикс!</h1>
            <p className='md:text-xl text-sm'>Платформа позволяет создавать доски планирования с визуальным отслеживанием этапов выполнения.</p>
            <p className='md:text-xl text-sm'>(Платформа находится в стадии разработки)</p>
            <Button onClick={() => router.push('/boards')} variant='secondary' className='md:text-xl md:p-6 mt-3 self-center text-[#FFFFF2] p-3'>Начать работу</Button>
        </div >
    );
};

export default RootText;