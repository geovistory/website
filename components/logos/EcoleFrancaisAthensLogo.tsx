import Image from 'next/image';
import logo from '../../public/LOGO-EFA-CT-72.jpg';
export const EcoleFrancaisAthensLogo = () => (
  <Image
    src={logo}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="Logo Ecole Française d'Athènes"
  />
);
