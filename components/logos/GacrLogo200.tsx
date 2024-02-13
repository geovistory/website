import Image from 'next/image';
import img from '../../public/logo-gacr-en.png';

export const GacrLogo200 = () => (
  <Image
    src={img}
    placeholder="blur"
    width={200}
    height={200}
    objectFit={'scale-down'}
    alt="Czech Science Foundation" />
);
