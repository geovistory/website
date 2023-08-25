import Image from 'next/image';
import logo from '../../public/logo-plat-geo-ehess.jpg';
export const PlatGeoEhessLogo = () => (
  <Image
    src={logo}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="Logo Plateforme Géographique EHESS"
  />
);
