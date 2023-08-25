import Image from 'next/image';
import logo from '../../public/logo_ANR.png'
export const AnrLogo = () => (
  <Image
    src={logo}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="Logo Agence Nationale de la Recherche" />
);
