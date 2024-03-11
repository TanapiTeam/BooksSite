import styles from '@/pages/index.module.scss';
import { Button } from '@/components/Button';
import { NextPage } from 'next';


export const Home: NextPage = () => {
    return (
        <div>
            <div className={styles.title}>BooksSite</div>
            <Button />
        </div>
    );
};

export default Home;
