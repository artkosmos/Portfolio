import style from './SendForm.module.scss'

export const SendForm = () => {
  return (
    <form className={style.form}>

      <input className={style.name} type="text" name="name" placeholder={'Enter name'} required/>
      <input className={style.mail} type="email" name="email" placeholder={'Enter e-mail'} required/>
      <textarea className={style.message} name="message" placeholder={'Enter message or question'} required></textarea>

      <input type="submit" value="Send"/>
    </form>
  )
}

