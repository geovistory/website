import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div style={{width: '100%', height: '95vh', display: 'flex', justifyContent: 'center'}}>
      <Image src="/geovistory-logo.svg" width={300} height={100}></Image>
    </div>
  )
}

export default Home
