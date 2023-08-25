import Image from 'next/image';
import SNFImg from '../../public/SNF_logo_standard_web_sw_pos_d.png';

export const SnfLogo = () => (
  <Image
    src={SNFImg}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="Schweizerischer Nationalfonds logo" />
);
