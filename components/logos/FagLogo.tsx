import Image from 'next/image';
import FAGImg from '../../public/FAG_logo_black.png';

export const FagLogo = () => <Image
  src={FAGImg}
  placeholder="blur"
  width={150}
  height={150}
  objectFit={'scale-down'}
  alt="Freiwillige Akademische Gesellschaft Basel" />;
