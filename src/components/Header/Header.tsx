import style from './Header.module.scss'
import styleContainer from '../../container/container.module.scss'
import {Navigation} from "../Navigation/Navigation";

export const Header = () => {
  return (
    <header className={`${style.header}`}>
      <div className={`${styleContainer.container}`}>
        <div className={`${style.headerContent}`}>
          <Navigation/>
        </div>
      </div>
    </header>
  )
}
