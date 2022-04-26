import type { NextPage  } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

    <br/>
    <br/>
    <br/>
    <Link href="/react-components">
      <a>React components</a>
    </Link>

    <br/>
    <br/>
    <br/>

    <Link href="/web-components">
        <a>Web components</a>
      </Link>
    </div>
  )
}

export default Home
