import React from 'react';
import style from './Main.module.css'
import {Home} from './home/Home';
import {About} from './about/About';
import {Skills} from './skills/Skills';
import {Project} from './project/Project';


export const Main = () => {
  return (
    <main className={style.main} id="home">
      <div className={style.main__container}>
        <Home/>
        <About
          id="about"
        />
        <Skills
          id="skills"
        />
        <Project
          id="project"
        />
      </div>
    </main>
  );
};

