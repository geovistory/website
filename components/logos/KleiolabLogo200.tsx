import Image from 'next/image';
import kleiolabImg from '../../public/kleiolab-logo.png';


export const KleiolabLogo200 = () => (
  <Image
    src={kleiolabImg}
    placeholder="blur"
    width={200}
    height={200}
    objectFit={'scale-down'}
    alt="KleioLab logo" />
);
