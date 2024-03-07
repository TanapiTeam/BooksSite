import { NextPage } from 'next';
import { ImageList } from '@/components/ImageList';
import { LanguageList } from '@/components/Language';
import st from './index.module.scss';
import { BookModal } from '@/components/BookModal';

export const BooksPage: NextPage = () => {
    return (
        <div>
            <div></div>
            <div className={st.container}>
                <div className={st.container__title}>
                    {LanguageList[0].language}の書籍ランキング
                </div>
                <div className={st.container__rankingTitle}>レビュー数順</div>
                <ImageList />
                <div className={st.container__rankingTitle}>星の数順</div>
                <ImageList />
                <div className={st.container__rankingTitle}>発売日順</div>
                <ImageList />
                <BookModal />
            </div>
        </div>
    );
};

export default BooksPage;
