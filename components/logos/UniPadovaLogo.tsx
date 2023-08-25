import Image from 'next/image';
import logo from '../../public/Logo_padova.png'
export const UniPadovaLogo = () => (
  <Image
    src={logo}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="Logo Università Delgli Studi Di Padova" />
);
