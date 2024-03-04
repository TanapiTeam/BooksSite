import { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "@/pages/index.module.scss";

export const Home: NextPage = () => {
  return (
    <div>
    <div className={styles.title}>BooksSite</div>
    <button className={styles.button}>言語選択ボタン</button>
    </div>
  )
}

export default Home;