import style from './Header.module.scss'
import styleContainer from '../../container/container.module.scss'
import {Navigation} from "../Navigation/Navigation";

export const Header = () => {
  return (
    <div className={`${style.header}`}>
      <div className={`${style.headerContent} ${styleContainer.container}`}>
        <Navigation/>
      </div>
    </div>
  )
}
