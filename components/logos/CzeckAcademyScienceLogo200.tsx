import Image from 'next/image';
import img from '../../public/logo-czech-acadamy-science.png';

export const CzeckAcademyScienceLogo200 = () => (
  <Image
    src={img}
    placeholder="blur"
    width={200}
    height={200}
    objectFit={'scale-down'}
    alt="Czech Academy of Science" />
);
