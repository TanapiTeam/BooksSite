import st from './index.module.scss';
import { FC } from 'react';
import Image from 'next/image';

type Props = {
    imgUrl: string;
    altText: string;
    ranking: number;
};

export const ImageBox: FC<Props> = ({ imgUrl, altText, ranking }) => {
    return (
        <div className={st.imageContainer}>
            <div className={st.imageContainer__ranking}>{ranking}</div>
            <Image src={imgUrl} alt={altText} className={st.imageContainer__imgBox} width={200} height={200} />
        </div>
    );
};
