import Image from 'next/image';
import unibasImg from '../../public/universitat-basel-logo.png';


export const UnibasLogo = () => (
  <Image
    src={unibasImg}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="Universität Basel logo" />
);
