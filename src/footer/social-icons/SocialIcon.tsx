import React from 'react';
import style from './SocialIcon.module.css'

type Props = {
  iconPath: string,
  href: string,
  alt?: string,
  className?: string
}

export const SocialIcon = ({href, iconPath, alt = 'social icon', className}: Props) => {
  return (
    <a className={`${style.icon} ${className}`} rel="noopener noreferrer" target="_blank"
       href={href}>
      <img src={iconPath} alt={alt}/>
    </a>
  );
};

