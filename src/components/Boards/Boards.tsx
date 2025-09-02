import React from 'react';
import { Button } from '../ui/button';

const Boards = () => {
    return (
        <div className='bg-[#0b3a09] rounded-md p-4 m-4 w-[512px]'>
            <div className='flex justify-between items-center'>
                <p>У вас пока нет досок. Создайте новую!</p>
                <Button className='bg-[#fffff2] text-black'>Создайте новую!</Button>
            </div>
        </div>
    );
};

export default Boards;