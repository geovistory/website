import Image from 'next/image';
import logo from '../../public/Logo_sga.png';
export const SgaLogo = () => (
  <Image
    src={logo}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="Logo DiSSGeA"
  />
);
