import React, { useState } from 'react';
import { ModalButton } from '@/components/ModalButton';

export const BookModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>モーダルを開く</button>
            <ModalButton isOpen={modalIsOpen} closeModal={closeModal}>
                モーダルの中身
            </ModalButton>
        </div>
    );
};
