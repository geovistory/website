import Image from 'next/image';
import huygensImg from '../../public/huygens-institute.png';


export const HuygensLogo = () => (
  <Image
    src={huygensImg}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="Logo Huygens Institute" />
);
