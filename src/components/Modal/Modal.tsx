// components/ui/modal.tsx
'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface ModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title?: string;
    children: ReactNode;
    trigger?: ReactNode;
}

export function Modal({
    open,
    onOpenChange,
    title,
    children,
    trigger
}: ModalProps) {
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}

            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow" />
                <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1a1a25] min-w-[500px] p-6 rounded-lg shadow-lg max-w-md w-full data-[state=open]:animate-contentShow">
                    {title && (
                        <Dialog.Title className="text-xl font-semibold mb-4">
                            {title}
                        </Dialog.Title>
                    )}

                    {children}

                    <Dialog.Close asChild>
                        <button
                            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                            aria-label="Close"
                        >
                            <XIcon className='text-[#fffff2] cursor-pointer' />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}