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
            Frontend developer with experience in developing on the stack of JavaScript, TypeScript, React, and
            Redux technologies. My focus is on attention to detail, writing understandable code, and using technology
            effectively in web development. I am glad to be a part of a professional team and contribute to
            projects.
          </Text>
        </div>
      </div>
    </div>
  );
};
