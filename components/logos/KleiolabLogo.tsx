import Image from 'next/image';
import kleiolabImg from '../../public/kleiolab-logo.png';


export const KleiolabLogo = () => (
  <Image
    src={kleiolabImg}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="KleioLab logo" />
);
