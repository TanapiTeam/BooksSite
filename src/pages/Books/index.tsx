import { NextPage } from 'next';
import { ImageList } from '@/components/ImageList';
import st from './index.module.scss';

export const BooksPage: NextPage = () => {
    return (
        <div>
            <div className={st.container}>
                <div className={st.container__title}>〜の書籍ランキング</div>
                <div className={st.container__rankingTitle}>レビュー数順</div>
                <ImageList />
                <div className={st.container__rankingTitle}>星の数順</div>
                <ImageList />
                <div className={st.container__rankingTitle}>発売日順</div>
                <ImageList />
            </div>
        </div>
    );
};

export default BooksPage;
