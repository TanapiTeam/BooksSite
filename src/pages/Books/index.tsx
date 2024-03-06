import { NextPage } from 'next';
import { ImageList } from '@/components/ImageList';
import st from './index.module.scss';
import BooksAPI from '@/components/BooksAPI/BooksAPI';

export const BooksPage: NextPage = () => {
    return (
        <div>
            <div className={st.container}>
                <div className={st.container__title}>〜の書籍ランキング</div>
                <div>レビュー数順</div>
                <ImageList />
                <BooksAPI />
                <div>星の数順</div>
                <ImageList />
                <div>発売日順</div>
                <ImageList />
            </div>
        </div>
    );
};

export default BooksPage;
