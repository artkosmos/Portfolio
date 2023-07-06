import style from './Greeting.module.scss'
import styleContainer from '../../container/container.module.scss'

export const Greeting = () => {
  return (
    <article className={style.greeting}>
      <div className={`${style.greetingContent} ${styleContainer.container}`}>
        <div className={style.text}>
          <span>Hi there!</span>
          <h1>I am Artem Kosmatkov</h1>
          <span>Frontend Developer</span>
        </div>
        <div className={style.image}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/274px-Elon_Musk_Royal_Society_%28crop2%29.jpg" alt="my photo"/>
        </div>
      </div>
    </article>
  )
}
