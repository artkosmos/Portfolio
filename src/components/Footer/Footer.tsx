import style from './Footer.module.scss'
import styleContainer from '../../container/container.module.scss'
import facebook from "../../assets/logo/facebook_logo.png"
import linkedin from "../../assets/logo/linkedin_logo.png"
import instagram from "../../assets/logo/insta_logo.png"
import whatsapp from "../../assets/logo/whatsapp_logo.png"
import telegram from "../../assets/logo/logo_telegram.png"

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={styleContainer.container}>
        <div className={style.footerContent}>
          <h3 className={style.title}>Artem Kosmatkov</h3>
          <div className={style.socialMediaWrapper}>
            <a className={style.socialLink} href="##">
              <img src={facebook} alt="facebook"/>
            </a>
            <a className={style.socialLink} href="##">
              <img src={instagram} alt="instagram"/>
            </a>
            <a className={style.socialLink} href="##">
              <img src={whatsapp} alt="whatsapp"/>
            </a>
            <a className={style.socialLink} href="##">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <a className={style.socialLink} href="##">
              <img src={telegram} alt="telegram"/>
            </a>
          </div>
          <div className={style.rights}>&copy; 2023 All rights reserved</div>
        </div>
      </div>

    </footer>
  )
}
