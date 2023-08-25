import Image from 'next/image';
import logo from '../../public/Logo_efr.png'
export const EcoleFrancaisRomeLogo = () => <Image
  src={logo}
  placeholder="blur"
  width={150}
  height={150}
  objectFit={'scale-down'}
  alt="Logo Ecole Française de Rome" />;
