import Image from 'next/image';
import unibeImg from '../../public/logo-unibe.png';

export const UnibeLogo = () => (
  <Image
    src={unibeImg}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="Logo University of Bern" />
);
