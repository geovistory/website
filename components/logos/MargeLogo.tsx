import Image from 'next/image';
import logo from '../../public/logo_marge.jpg';
export const MargeLogo = () => (
  <Image
    src={logo}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="MARGE"
  />
);
