import Image from 'next/image';
import logo from '../../public/logo_msh_lyon_st_etienne.jpg';
export const MshLyonStEtienneLogo = () => (
  <Image
    src={logo}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="MSH Lyon St-Etienne" />
);
