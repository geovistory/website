import Image from 'next/image';
import logo from '../../public/logo_musee_rio.jpg';
export const MuseeRioLogo = () => (
  <Image
    src={logo} placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="Musee Rio" />
);
