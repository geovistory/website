import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo-fondation-pour-la-memoire-de-la-shoah.jpg';
export const FondationSouhaLogo = () => (
  <Image
    src={logo}
    placeholder="blur"
    width={150}
    height={150}
    objectFit={'scale-down'}
    alt="Logo Fondation pour la mémoire de la Shoah"
  />
);
