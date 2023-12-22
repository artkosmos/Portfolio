import React from 'react';
import style from './Home.module.css'
import avatar from './img/photo.jpg';
import avatar_360 from './img/photo_360.jpg';
import avatar_768 from './img/photo_768.jpg';


export const Home = () => {
  return (
    <div className={style.main__body}>
      <h1 className={style.main__title}>
        <span>My name is</span>
        <span className={style.main__title_gradient}>Artem Kosmatskov</span>
        <span>I am a Frontend Developer</span>
      </h1>
      <div className={style.main__photo}>
        <picture>
          <source srcSet={`${avatar_360} 360w, ${avatar_768} 768w`} type="image/webp"/>
          <img src={avatar} alt="My photo"/>
        </picture>
      </div>
    </div>
  );
};


