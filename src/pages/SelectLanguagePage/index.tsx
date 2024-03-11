import { NextPage } from 'next';
import styles from '@/pages/index.module.scss';
import { Language } from '@/components/Language';

export const SelectLanguage: NextPage = () => {

    return (
        <div>
            <header className={styles.title}>BooksSite</header>
            <main>
                <Language />
            </main>
        </div>
    );
};

export default SelectLanguage;
