import React, { ComponentProps } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { Input } from '../ui/input';
import { RegisterData } from '@/types/FormTypes';
import { Button } from '../ui/button';
import LocalStorage from '@/lib/LocalStorage';
import { useModal } from '@/context/ModalContext';

const FormInput = ({ name, type = 'text', ...props }: { name: string } & ComponentProps<'input'>) => {
    const { register } = useFormContext()
    const commonProps = {
        className: 'bg-[#FFFFF2] rounded-lg px-2 py-1 text-black focus:outline-0 min-w-[400px] !text-lg',
        ...register(name),
        ...props
    }

    return <Input {...commonProps} type={type} />
}

const CreateBoardContent = () => {
    const { closeModal } = useModal()
    const methods = useForm<RegisterData>({
        mode: 'onBlur',
    })

    const onSubmit = (data: RegisterData) => {
        const existingBoards = LocalStorage.get<{ id: number; boardName: string; cols: number }[]>('USER_BOARDS') || []
        const newBoard = {
            id: Date.now(),
            boardName: data.boardName,
            cols: 2
        }

        LocalStorage.set('USER_BOARDS', [...existingBoards, newBoard])
        closeModal()
    }
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                <FormInput name='boardName' placeholder='Название доски' />
                <Button variant='secondary'>Создать доску</Button>
            </form>
        </FormProvider >
    );
};

export default CreateBoardContent;
