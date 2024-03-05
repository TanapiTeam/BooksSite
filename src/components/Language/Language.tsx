import { FC, ReactNode } from 'react';
import st from './index.module.scss';

type LanguageListType = { id: string; language: string; context: string }[];

const LanguageList: LanguageListType = [
    {
        id: '1',
        language: 'Python',
        context: 'https://storage.googleapis.com/zenn-user-upload/topics/ebddf7c6bb.png',
    },
    {
        id: '2',
        language: 'TypeScript',
        context: 'https://storage.googleapis.com/zenn-user-upload/topics/f13e758fdb.png',
    },
    {
        id: '3',
        language: 'JavaScript',
        context: 'https://storage.googleapis.com/zenn-user-upload/topics/64acd76870.png',
    },
    {
        id: '4',
        language: 'PHP',
        context: 'https://storage.googleapis.com/zenn-user-upload/topics/21186e4563.png',
    },
    {
        id: '5',
        language: 'C#',
        context: 'https://storage.googleapis.com/zenn-user-upload/topics/7e99597bc4.png',
    },
];

export const Language: FC = () => {
    return (
        <div>
            <div className={st.flex}>
                {LanguageList.map((_, index) => (
                    <div className={st.LanguageList}>
                        <div>
                            <div>
                                <img
                                    key={index}
                                    src={LanguageList[index].context}
                                    className={st.LanguageList__icon}
                                />
                            </div>
                            <div>{LanguageList[index].language}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={st.flex}>
                <div className={st.LanguageList}>
                    <div>
                        <img src={LanguageList[0].context} className={st.LanguageList__icon} />
                    </div>
                    <div>{LanguageList[0].language}</div>
                </div>
                <div className={st.LanguageList}>
                    <div>
                        <img src={LanguageList[1].context} className={st.LanguageList__icon} />
                    </div>
                    <div>{LanguageList[1].language}</div>
                </div>
                <div className={st.LanguageList}>
                    <div>
                        <img src={LanguageList[2].context} className={st.LanguageList__icon} />
                    </div>
                    <div>{LanguageList[2].language}</div>
                </div>
                <div className={st.LanguageList}>
                    <div>
                        <img src={LanguageList[3].context} className={st.LanguageList__icon} />
                    </div>
                    <div>{LanguageList[3].language}</div>
                </div>
                <div className={st.LanguageList}>
                    <div>
                        <img src={LanguageList[4].context} className={st.LanguageList__icon} />
                    </div>
                    <div>{LanguageList[4].language}</div>
                </div>
            </div>
        </div>
    );
};
