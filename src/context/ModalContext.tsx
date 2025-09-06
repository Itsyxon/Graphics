'use client';

import { Modal } from '@/components/Modal/Modal';
import { createContext, useContext, useState } from 'react';

interface ModalContextType {
    openModal: (content: React.ReactNode, title?: string) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);
    const [modalTitle, setModalTitle] = useState<string>('');

    const openModal = (content: React.ReactNode, title: string = '') => {
        setModalContent(content);
        setModalTitle(title);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setTimeout(() => {
            setModalContent(null);
            setModalTitle('');
        }, 300);
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}

            <Modal
                open={isOpen}
                onOpenChange={setIsOpen}
                title={modalTitle}
            >
                {modalContent}
            </Modal>
        </ModalContext.Provider>
    );
}

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('usemodal должен быть внутри провайдера');
    }
    return context;
};