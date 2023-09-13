import Image from 'next/image';
import logo from '../../public/uzh_logo_en.png';
export const UniZhLogo200 = () => (
  <Image
    src={logo}
    placeholder="blur"
    width={200}
    height={200}
    objectFit={'scale-down'}
    alt="University of Zurich"
  />
);
