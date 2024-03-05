import { FC } from 'react';
import Link from 'next/link';

import styles from '@/components/Button/index.module.scss';

export const Button: FC = () => {
  return (
    <Link href='' className={styles.button}>
      言語選択ボタン
    </Link>
  );
};
