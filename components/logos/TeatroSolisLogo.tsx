import Image from 'next/image';
import logo from '../../public/logo_teatro_solis.jpg';
export const TeatroSolisLogo = () => (
  <Image
    src={logo}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="Teatro Solis"
  />
);
