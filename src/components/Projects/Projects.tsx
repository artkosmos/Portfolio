import style from './Projects.module.scss'
import styleContainer from '../../container/container.module.scss'
import {Project} from "./Project/Project";

export const Projects = () => {
  return (
    <section className={style.projects}>
      <div className={styleContainer.container}>
        <div className={style.projectsContent}>
          <h2 className={style.title}>My Projects</h2>
          <div className={style.projectsWrapper}>
            <Project title={'To-Do List'}/>
            <Project title={'Social network'}/>
          </div>
        </div>
      </div>

    </section>
  )
}
