import Image from 'next/image';
import larhraImg from '../../public/larhra-logo.jpg';


export const LarhraLogo = () => (
  <Image
    src={larhraImg}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="Logo LARHRA" />
);
