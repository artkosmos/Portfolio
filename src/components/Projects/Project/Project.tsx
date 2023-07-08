import style from './Project.module.scss'

type ProjectPropsType = {
  title: string
}

export const Project = ({title}: ProjectPropsType) => {
  return (
    <div className={style.project}>
      <div className={style.image}>
        <a href={"##"} className={style.button}>Look at the project</a>
      </div>
      <h3 className={style.projectTitle}>{title}</h3>
      <div className={style.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Excepturi ipsum nemo nihil officiis repudiandae. Ad culpa laudantium nobis quasi sequi.
        Adipisci, aliquid amet commodi ipsam iste maiores optio recusandae veniam.
      </div>
    </div>
  )
}