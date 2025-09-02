import Boards from '@/components/Boards/Boards';
import React from 'react';

const BoardsPage = () => {
    return (
        <div>
            <div className='p-4 text-2xl bg-[#1aa111]'>
                <h1>Ваши доски</h1>
            </div>
            <Boards />
        </div>
    );
};

export default BoardsPage;