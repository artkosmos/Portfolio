import React from 'react';
import style from './Skills.module.css'
import {BlockTitle} from '../componets/BlockTitle';
import html_icon from './img/01.svg';
import css_icon from './img/02.svg';
import js_icon from './img/03.svg';
import react_icon from './img/04.svg';
import redux_icon from './img/05.svg';
import router_icon from './img/19.svg';
import git_icon from './img/07.svg';
import graphql_icon from './img/08.svg';
import figma_icon from './img/09.svg';
import mui_icon from './img/10.svg';
import ts_icon from './img/11.svg';
import radix_icon from './img/12.svg';
import ant_icon from './img/13.svg';
import tailwind_icon from './img/14.svg';
import sass_icon from './img/15.svg';
import storybook_icon from './img/16.svg';
import next_logo from './img/17.svg';
import jest_icon from './img/18.svg';


type SkillsPropsType = {
  id: string
}
export const Skills = (props: SkillsPropsType) => {
  return (
    <div className={style.skills} id={props.id}>
      <div className={style.skills__body}>
        <BlockTitle title={'Hard Skills'}/>
        <ul className={style.skills__icons}>
          <li className={style.skills__icon}><img src={js_icon} alt="JS" title={'JavaScript'}/></li>
          <li className={style.skills__icon}><img src={ts_icon} alt="TS" title={'TypeScript'}/></li>
          <li className={style.skills__icon}><img src={react_icon} alt="REACT" title={'React.js'}/></li>
          <li className={style.skills__icon}><img src={redux_icon} alt="REDUX" title={'Redux'}/></li>
          <li className={style.skills__icon}><img src={router_icon} alt="REACTROUTER" title={'React Router DOM'}/></li>
          <li className={style.skills__icon}><img src={next_logo} alt="NEXTJS" title={'Next.js'}/></li>
          <li className={style.skills__icon}><img src={graphql_icon} alt="GRAPGQL" title={'GraphQL'}/></li>
          <li className={style.skills__icon}><img src={html_icon} alt="HTML" title={'HTML'}/></li>
          <li className={style.skills__icon}><img src={css_icon} alt="CSS" title={'CSS'}/></li>
          <li className={style.skills__icon}><img src={sass_icon} alt="SASS" title={'SASS'}/></li>
          <li className={style.skills__icon}><img src={tailwind_icon} alt="TAILWIND" title={'Tailwind'}/></li>
          <li className={style.skills__icon}><img src={jest_icon} alt="JEST" title={'Jest testing'}/></li>
          <li className={style.skills__icon}><img src={git_icon} alt="GIT" title={'Git'}/></li>
          <li className={style.skills__icon}><img src={figma_icon} alt="FIGMA" title={'Figma'}/></li>
          <li className={style.skills__icon}><img src={storybook_icon} alt="STORYBOOK" title={'Storybook'}/></li>
          <li className={style.skills__icon}><img src={mui_icon} alt="MATERIALUI" title={'Material UI library'}/></li>
          <li className={style.skills__icon}><img src={radix_icon} alt="RADIXUI" title={'Radix UI library'}/></li>
          <li className={style.skills__icon}><img src={ant_icon} alt="ANTDESIGN" title={'AntDesign UI library'}/></li>
        </ul>
      </div>
    </div>
  );
};
