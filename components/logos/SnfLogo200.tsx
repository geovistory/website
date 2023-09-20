import Image from 'next/image';
import SNFImg from '../../public/SNF_logo_standard_web_sw_pos_d.png';

export const SnfLogo200 = () => (
  <Image
    src={SNFImg}
    placeholder="blur"
    width={200}
    height={200}
    objectFit={'scale-down'}
    alt="Schweizerischer Nationalfonds logo" />
);
