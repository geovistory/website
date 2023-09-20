import Image from 'next/image';
import logo from '../../public/uzh_logo_en.png';
export const UniZhLogo = () => (
  <Image
    src={logo}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="University of Zurich" />
);
