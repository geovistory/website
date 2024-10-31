import Image from 'next/image';
import amuLogo from '../../public/logo-amu.png';


export const AmuLogo = () => (
  <Image
    src={amuLogo}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="AMU logo" />
);
