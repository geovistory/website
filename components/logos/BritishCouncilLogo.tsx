import Image from 'next/image';
import britishCouncilLogo from '../../public/logo-british-council.png';


export const BritishCouncilLogo = () => (
  <Image
    src={britishCouncilLogo}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="Britisch Council logo" />
);
