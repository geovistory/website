import Image from 'next/image';
import logo from '../../public/logo_anr2.png'
export const AnrLogo2 = () => (
  <Image
    src={logo}
    placeholder="blur"
    width={200}
    height={200}
    objectFit={'scale-down'}
    alt="Logo Agence Nationale de la Recherche" />
);
