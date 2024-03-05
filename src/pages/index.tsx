import { NextPage } from 'next';
import { useRouter } from 'next/router';
import styles from '@/pages/index.module.scss';
import { Language } from '@/components/Language';
import { Button } from '@/components/Button';

export const Home: NextPage = () => {
    return (
        <div>
            <div className={styles.title}>BooksSite</div>
            <Button />
            <Language />
        </div>
    );
};

export default Home;
