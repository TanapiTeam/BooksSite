import { FC, ReactNode } from 'react';
import st from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';

type LanguageListType = { id: string; language: string; context: string; url: string }[];

export const LanguageList: LanguageListType = [
    {
        id: '1',
        language: 'TypeScript',
        context: 'https://storage.googleapis.com/zenn-user-upload/topics/f13e758fdb.png',
        url: 'http://localhost:3000/Books/TypeSctipt',
    },
    {
        id: '2',
        language: 'PHP',
        context: 'https://storage.googleapis.com/zenn-user-upload/topics/21186e4563.png',
        url: 'http://localhost:3000/Books/PHP',
    },
    {
        id: '3',
        language: 'Python',
        context: 'https://storage.googleapis.com/zenn-user-upload/topics/ebddf7c6bb.png',
        url: 'http://localhost:3000/Books/Python',
    },
    {
        id: '4',
        language: 'React',
        context: 'https://storage.googleapis.com/zenn-user-upload/topics/489b9436a3.png',
        url: 'http://localhost:3000/Books/React',
    },
    {
        id: '5',
        language: 'Flutter',
        context: 'https://storage.googleapis.com/zenn-user-upload/topics/cf1ed29009.png',
        url: 'http://localhost:3000/Books/Flutter',
    },
    {
        id: '6',
        language: 'Next.js',
        context: 'https://storage.googleapis.com/zenn-user-upload/topics/d87ff27d89.png',
        url: 'http://localhost:3000/Books/Next.js',
    },
    {
        id: '7',
        language: 'Docker',
        context: 'https://storage.googleapis.com/zenn-user-upload/topics/01c7f20365.png',
        url: 'http://localhost:3000/Books/Docker',
    },
    {
        id: '8',
        language: 'Golang',
        context: 'https://storage.googleapis.com/zenn-user-upload/topics/8b677725c8.png',
        url: 'http://localhost:3000/Books/Golang',
    },
    {
        id: '9',
        language: 'Rails',
        context: 'https://storage.googleapis.com/zenn-user-upload/topics/b92ab26992.png',
        url: 'http://localhost:3000/Books/Rails',
    },
    {
        id: '10',
        language: 'Ruby',
        context: 'https://storage.googleapis.com/zenn-user-upload/topics/c2a28ae269.png',
        url: 'http://localhost:3000/Books/Ruby',
    },
];

export const Language: FC = () => {
    return (
        <div>
            <div className={st.flex}>
                {LanguageList.map((elem, index) => (
                    <Link className={st.LanguageList} key={index} href={elem.url}>
                        <div key={elem.id}>
                            <Image src={elem.context} className={st.LanguageList__icon} width={70} height={70} alt='icon'/>
                            <div>{elem.language}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
