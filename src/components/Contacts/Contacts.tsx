import style from './Contacts.module.scss'
import styleContainer from '../../container/container.module.scss'
import {SendForm} from "./SendForm/SendForm";

export const Contacts = () => {
  return (
    <section className={style.contacts}>
      <div className={styleContainer.container}>
        <div className={style.contactsContent}>
          <h2 className={style.title}>Contact</h2>
          <SendForm/>
        </div>
      </div>
    </section>
  )
}
