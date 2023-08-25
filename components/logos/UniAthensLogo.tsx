import Image from 'next/image';
import logo from '../../public/logo_ekpa.png';
export const UniAthensLogo = () => (
  <Image
    src={logo}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="Logo University of Athens"
  />
);
