import Image from 'next/image';
import logo from '../../public/logo_unila.jpg';
export const UnilaLogo = () => (
  <Image
    src={logo}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="UNILA" />
);
