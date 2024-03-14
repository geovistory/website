import Image from 'next/image';
import unibasImg from '../../public/universitat-basel-logo.png';


export const UnibasLogo200 = () => (
  <Image
    src={unibasImg}
    placeholder="blur"
    width={200}
    height={200}
    objectFit={'scale-down'}
    alt="Universität Basel logo" />
);
