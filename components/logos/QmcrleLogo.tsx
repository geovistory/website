import Image from 'next/image';
import qmcrleLogo from '../../public/logo-qmcrle.png';


export const QmcrleLogo = () => (
  <Image
    src={qmcrleLogo}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="QMCRLE logo" />
);
