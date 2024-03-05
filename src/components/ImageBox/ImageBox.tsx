import { FC } from 'react';
import st from './index.module.scss';

type Props = {
    imgUrl: string;
    altText: string;
    ranking: number;
};

export const ImageBox: FC<Props> = ({ imgUrl, altText, ranking }) => {
    return (
        <div className={st.imageContainer}>
            <div>{ranking}</div>
            <img src={imgUrl} alt={altText} className={st.imgBox} />
        </div>
    );
};
