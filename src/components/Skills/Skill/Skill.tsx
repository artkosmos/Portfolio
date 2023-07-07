import style from './Skill.module.scss'
import skillLogo from '../../../assets/logo/skill_logo.png'

type SkillPropsType = {
  skill: string
}

export const Skill = ({skill}: SkillPropsType) => {
  return (
    <div className={style.skillBox}>
      <div className={style.image}>
        <img src={skillLogo} alt="skill"/>
      </div>
      <h3 className={style.title}>{skill}</h3>
      <div className={style.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        A cum in libero possimus qui, veritatis vitae.
        Ad animi, corporis distinctio eaque illum labore natus necessitatibus quo sequi, soluta ut vero?
      </div>
    </div>
  )
}
