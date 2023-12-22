import React from 'react';
import style from './Footer.module.css'
import github from './social-icons/icons/github_icon.svg';
import telegram from './social-icons/icons/telegram_icon.svg';
import linkedin from './social-icons/icons/linkedin_icon.svg';
import {BlockTitle} from "../main/componets/BlockTitle";
import {SocialIcon} from "./social-icons/SocialIcon";

export const Footer = () => {
  return (
    <footer className={style.footer} id={'contacts'}>
      <div className={style.footer__container}>
        <div className={style.footer__body}>
          <BlockTitle title={'Contact Me'}/>
          <div className={style.footer__contacts}>
            <ul className={style.footer__list}>
              <li><a href="tel:+375291282922">+375 (29) 1282922</a></li>
              <li><a href="mailto:artemkosmatkov1994@gmail.com">artemkosmatkov1994@gmail.com</a></li>
            </ul>
            <div className={style.footer__icons}>
              <SocialIcon iconPath={github} href={"https://github.com/artkosmos"}/>
              <SocialIcon iconPath={telegram} href={"https://t.me/art_kosmos"}/>
              <SocialIcon iconPath={linkedin} href={"https://linkedin.com/artemkosmatkov"}/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
