import Image from 'next/image';
import campusFranceLogo from '../../public/logo-campus-france.svg';


export const CampusFranceLogo = () => (
  <Image
    src={campusFranceLogo}
    //placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="Campus France logo" />
);
