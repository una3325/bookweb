import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="py-2">
        <Link href="/">첫 화면으로 돌아가기</Link>
      </div>
      <div className={styles.homeTitle}>
        <p>
          <a href="https://client-gold-mu.vercel.app/">
            리뷰를 작성하려면 클릭해주세요.
          </a>
          <div className={styles.img}>
            <img src="/images/aaa.jpg" alt="click" width="200px" />
          </div>
        </p>
      </div>
    </Layout>
  )
}
