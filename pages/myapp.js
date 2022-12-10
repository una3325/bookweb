import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className={styles.text}>
        <div>
          <h2>노수빈 개인 포트폴리오</h2>
          <div className={styles.texttext}>
            <a href="https://huhuhu-phi.vercel.app">바로가기</a>
          </div>
          <h2>한유정 개인 포트폴리오</h2>
          <div className={styles.texttext}>
            <a href="https://mymy-hanyooja.vercel.app">바로가기</a>
          </div>
          <h2>임혜준 개인 포트폴리오</h2>
          <div className={styles.texttext}>
            <a href="https://mymy-beige.vercel.app">바로가기</a>
          </div>
          <h2>양유나 개인 포트폴리오</h2>
          <div className={styles.texttext}>
            <a href="https://myblog-opal.vercel.app">바로가기</a>
          </div>
        </div>
      </div>
      <div className={styles.img}>
        <img src="/images/123123.jpg" />
      </div>
    </Layout>
  )
}
