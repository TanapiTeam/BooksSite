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
                    <p>本のサムネイル</p>
                    <img
                        src='https://picsum.photos/200'
                        alt='本の画像'
                        className={st.container__thumbnail}
                    />
                    <ul>
                        <li className={st.container__list}>著者:</li>
                        <li className={st.container__list}>ページ数:</li>
                        <li className={st.container__list}>発売日:</li>
                        <li className={st.container__list}>概要:</li>
                    </ul>
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
