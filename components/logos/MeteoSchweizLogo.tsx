import Image from 'next/image';
import meteoschweizImg from '../../public/meteo-schweiz-logo.png';

export const MeteoSchweizLogo = () => <Image
  src={meteoschweizImg}
  placeholder="blur"
  width={150}
  height={150}
  objectFit={'scale-down'}
  alt="Meteo Schweiz logo" />;
