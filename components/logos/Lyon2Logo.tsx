import Image from 'next/image';
import larhraImg from '../../public/logo_lyon2.png';


export const Lyon2Logo = () => (
  <Image
    src={larhraImg}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="Logo Lyon2" />
);
