import Layout from '../components/Layout'
import ProductItem from '../components/ProductItem'
import data from '../utils/data'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.homeTitle}>
      <a href="https://client-wheat-alpha.vercel.app/">
        리뷰를 작성하려면 클릭해주세요.
      </a>
    </div>
  )
}
