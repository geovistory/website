import Image from 'next/image';
import logo from '../../public/Logo_efr.png'
export const EcoleFrancaisRomeLogo200 = () => <Image
  src={logo}
  placeholder="blur"
  width={200}
  height={200}
  objectFit={'scale-down'}
  alt="Logo Ecole Française de Rome" />;
