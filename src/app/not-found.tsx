import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='flex gap-2 flex-col'>
            <p>Ошибка, страница не найдена.</p>
            <Link href='/'>Вернуться на главную</Link>
        </div>
    );
};

export default NotFoundPage;