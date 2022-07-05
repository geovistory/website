import type { NextPage } from 'next';
import Image from 'next/image';
import { version } from '../package.json';

const Home: NextPage = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '95vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#aaa'
      }}
    >
      <Image src="/geovistory-logo.svg" alt="Geovistory logo" width={300} height={100}></Image>
      <div> v{version}</div>
    </div>
  );
};

export default Home;
