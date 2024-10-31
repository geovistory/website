import Image from 'next/image';
import lermaLogo from '../../public/logo-lerma.png';


export const LermaLogo = () => (
  <Image
    src={lermaLogo}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="LERMA logo" />
);
