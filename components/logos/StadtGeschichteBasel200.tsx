import Image from 'next/image';
import img from '../../public/stadt-geschichte-basel-logo.svg';


export const StadtGeschichteBasel200 = () => (
  <Image
    src={img}
    width={200}
    height={200}
    objectFit={'scale-down'}
    alt="Stadt.Geschichte.Basel" />
);
