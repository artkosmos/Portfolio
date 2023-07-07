import style from './Skills.module.scss'
import styleContainer from '../../container/container.module.scss'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
  return (
    <section className={style.skills}>
      <div className={`${styleContainer.container}`}>
        <div className={`${style.skillsContent}`}>
          <h2 className={style.title}>My Skills</h2>
          <div className={style.skillsWrapper}>
            <Skill skill={'HTML'}/>
            <Skill skill={'CSS'}/>
            <Skill skill={'React'}/>
            <Skill skill={'TypeScript'}/>
            <Skill skill={'Storybook'}/>
            <Skill skill={'JavaScript'}/>
          </div>
        </div>
      </div>
    </section>
  )
}
