import React from 'react';
import style from './Project.module.css'
import {BlockTitle} from '../componets/BlockTitle';

type ProjectPropsType = {
    id:string
}

export const Project = (props:ProjectPropsType) => {
    return (
        <div className={style.project} id={props.id}>
            <div className={style.project__body}>
                <BlockTitle title={'Projects'}/>
            <div className={style.project__cards}>

            </div>
            </div>
        </div>
    );
};
