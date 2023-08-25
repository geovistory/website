import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo-ushmm.png';
export const UshmmLogo = () => (
  <Image
    src={logo}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="Logo USHMM"
  />
);
