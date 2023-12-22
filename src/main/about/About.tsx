import React from 'react';
import style from './About.module.css'
import {Text} from '../componets/Text';
import {BlockTitle} from '../componets/BlockTitle';

type AboutPropsType = {
  id: string
}

export const About = (props: AboutPropsType) => {
  return (
    <div className={style.about} id={props.id}>
      <div className={style.about__body}>
        <BlockTitle title={'About Me'}/>
        <div className={style.about__description}>
          <Text>
            Frontend developer with experience in developing using the core stack, such as <span
            className={style.tech}>JavaScript</span>, <span className={style.tech}>TypeScript</span>,
            <span className={style.tech}> React</span>, <span className={style.tech}> Redux</span> technologies.
            My focus is on attention to detail, writing understandable code, using
            technology effectively in web development and creating applications that bring satisfaction and convenience
            to users. I’m a collaborative worker and understand the importance of seamless teamwork for achieving great
            results. I am glad to be part of a professional team and contribute to projects.
          </Text>
          <Text><span className={style.bold}>Education:</span>
            <ul>
              <li>IT-INCUBATOR | Frontend developer</li>
              <li>Yanka Kupala State University of Grodno | Faculty of Engineering and Construction</li>
            </ul>
          </Text>
          <Text>
            <span className={style.bold}>Location:</span> Belarus
          </Text>
          <Text><span className={style.bold}>Languages:</span> Russian (native), English (Intermediate)</Text>
        </div>
      </div>
    </div>
  );
};
