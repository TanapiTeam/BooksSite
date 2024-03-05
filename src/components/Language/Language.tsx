import { FC } from 'react';
import st from './index.module.scss';

const LanguageList = { id: '1', language: 'Python', context: <div></div> };

export const Language: FC = () => {
    return (
        <div className={st.flex}>
            <div className={st.LanguageList}>
                <img
                    src='https://storage.googleapis.com/zenn-user-upload/topics/ebddf7c6bb.png'
                    className={st.LanguageList__icon}
                />
                <div>{LanguageList.language}</div>
            </div>
            <div className={st.LanguageList}>
                <div>
                    <img
                        src='https://storage.googleapis.com/zenn-user-upload/topics/ebddf7c6bb.png'
                        className={st.LanguageList__icon}
                    />
                </div>
                <div>{LanguageList.language}</div>
            </div>
        </div>
    );
};
