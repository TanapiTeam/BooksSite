import { FC, ReactNode, useState } from 'react';
import Modal from 'react-modal';
import st from './index.module.scss';
import Link from 'next/link';

type Props = {
    children: ReactNode;
    isOpen: boolean;
    closeModal: () => void;
};

export const ModalButton: FC<Props> = ({ isOpen, closeModal }) => {
    const [modalContent, setModalContent] = useState<string>('');
    const openModal = () => {
        setModalContent('モーダルの内容');
    };

    return (
        <div>
            <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel='Example Modal'>
                <div className={st.container}>
                    <h2 className={st.container__title}>本のタイトル</h2>
                    <p>{modalContent}</p>
                    <div className={st.container__imgBox}>
                        <img
                            src='https://picsum.photos/200'
                            alt='本の画像'
                            className={st.container__thumbnail}
                        />
                    </div>
                    <div>
                        <div className={st.container__bookInfo}>
                            <p>著者:</p>
                            <p></p>
                        </div>
                        <div className={st.container__bookInfo}>
                            <p className={st.container__}>ページ数:</p>
                            <p></p>
                        </div>
                        <div className={st.container__bookInfo}>
                            <p className={st.container__list}>発売日:</p>
                            <p></p>
                        </div>
                        <div className={st.container__bookContent}>
                            <p className={st.container__list}>概要:</p>
                            <div></div>
                        </div>
                    </div>
                    <div className={st.container__linkBox}>
                        <Link className={st.container__linkButton} href={''}>
                            Amazon
                        </Link>
                        <Link className={st.container__linkButton} href={''}>
                            楽天
                        </Link>
                    </div>
                    <button onClick={closeModal}>閉じる</button>
                </div>
            </Modal>
        </div>
    );
};
