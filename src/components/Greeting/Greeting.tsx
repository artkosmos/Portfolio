import style from './Greeting.module.scss'
import styleContainer from '../../container/container.module.scss'

export const Greeting = () => {
  return (
    <section className={style.greeting}>
      <div className={`${styleContainer.container}`}>
        <div className={`${style.greetingContent}`}>
          <div className={style.text}>
            <span className={style.hello}>Hi there!</span>
            <h1 className={style.name}>I am Artem Kosmatkov</h1>
            <span className={style.profession}>Frontend Developer</span>
          </div>
          <div className={style.image}></div>
        </div>
      </div>
    </section>
  )
}
