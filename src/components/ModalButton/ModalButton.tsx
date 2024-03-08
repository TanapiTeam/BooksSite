import { FC, ReactNode } from 'react';
import Modal from 'react-modal';
import st from './index.module.scss';
import Link from 'next/link';

type Props = {
    children: ReactNode;
    isOpen: boolean;
    closeModal: () => void;
};

export const ModalButton: FC<Props> = ({ isOpen, closeModal }) => {
    return (
        <div>
            <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel='Example Modal'>
                <div className={st.container}>
                    <h2 className={st.container__title}>本のタイトル</h2>

                    <div className={st.container__bookInfo}>
                        <div className={st.container__imgBox}>
                            <img
                                src='https://picsum.photos/500'
                                alt='本の画像'
                                className={st.container__thumbnail}
                            />
                        </div>
                        <div className={st.container__bookIntro}>
                            <div className={st.container__bookContent}>
                                <p className={st.container__bookContent__author}>著者:</p>
                                <p></p>
                            </div>
                            <div className={st.container__bookContent}>
                                <p className={st.container__bookContent__pageNumber}>ページ数:</p>
                                <p></p>
                            </div>
                            <div className={st.container__bookContent}>
                                <p className={st.container__bookContent__pubulshDate}>発売日:</p>
                                <p></p>
                            </div>
                            <div className={st.container__bookTextArea}>
                                <p className={st.container__bookTextArea__overview}>概要:</p>
                                <div></div>
                            </div>
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
