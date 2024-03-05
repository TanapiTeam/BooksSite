import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from '@/pages/index.module.scss'
import { Language } from '@/components/Language'



export const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.title}>BooksSite</div>
      <button className={styles.button}>言語選択ボタン</button>
      <Language />
    </div>
  )
}

export default Home
