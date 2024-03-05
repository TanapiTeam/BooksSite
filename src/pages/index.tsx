import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Button } from '@/components/Button/Button';
import styles from '@/pages/index.module.scss';

export const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.title}>BooksSite</div>
      <Button />
    </div>
  );
};

export default Home;
