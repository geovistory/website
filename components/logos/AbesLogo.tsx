import Image from 'next/image';
import abesImg from '../../public/logo_abes.png';

export const AbesLogo = () => (
  <Image
    src={abesImg}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="Logo Abes" />
);
