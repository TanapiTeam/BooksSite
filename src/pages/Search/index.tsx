import styles from '@/pages/index.module.scss';
import { NextPage } from 'next';

export const Home: NextPage = () => {
    return (
        <div>
            <div className={styles.title}>BooksSite</div>
        </div>
    );
};

export default Home;
