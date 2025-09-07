import { useModal } from '@/context/ModalContext';
import React, { ComponentProps } from 'react';
import { Button } from '../ui/button';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { UserBoard } from '@/types/BoardsTypes';
import { Input } from '../ui/input';
import LocalStorage from '@/lib/LocalStorage';

const EditInput = ({ name, type = 'text', ...props }: { name: string } & ComponentProps<'input'>) => {
    const { register } = useFormContext()
    const commonProps = {
        className: 'bg-[#FFFFF2] rounded-lg px-2 py-1 text-black focus:outline-0 !text-lg flex-1',
        ...register(name),
        ...props
    }

    if (type === 'color') {
        return <input type='color' {...commonProps} className='flex-1 h-[40px]' />
    }

    return <Input {...commonProps} type={type} />
}

const EditBoardContent = ({ boardId, boardName }: { boardId: number, boardName: string }) => {
    const { closeModal } = useModal()
    const methods = useForm<UserBoard>({
        mode: 'onBlur',
        defaultValues: {
            boardName: boardName,
            bgColor: '#6366f1'
        }
    })

    const handleEditBoard = (data: UserBoard) => {
        const userBoards = LocalStorage.get<UserBoard[]>('USER_BOARDS') || [];
        const boardIndex = userBoards.findIndex((board) => board.id === boardId);

        if (boardIndex !== -1) {
            const updatedBoards = [...userBoards];
            updatedBoards[boardIndex] = {
                ...updatedBoards[boardIndex],
                ...data
            };

            LocalStorage.set('USER_BOARDS', updatedBoards);

        } else {
            console.error('Доска не найдена');
        }
        closeModal();
        location.reload() // ! иммитирование повторного GET-запроса по ключу после мутации. Чуть позже добавлю стейт-менеджер и сделаю синхронизацию
    }

    return (
        <FormProvider {...methods}>
            <form className='flex flex-col gap-6' onSubmit={methods.handleSubmit(handleEditBoard)}>
                <div className='flex'>
                    <label className='w-[220px]'>Название доски</label>
                    <EditInput name='boardName' type="text" />
                </div>
                <div className='flex'>
                    <label className='w-[220px]'>Заливка</label>
                    <EditInput name='bgColor' type="color" />
                </div>
                <div className='flex self-end gap-2 mt-3'>
                    <Button variant='white' type="button" onClick={closeModal}>Отменить</Button>
                    <Button variant='secondary' type='submit'>Редактировать</Button>
                </div>
            </form>
        </FormProvider>
    );
};

export default EditBoardContent;