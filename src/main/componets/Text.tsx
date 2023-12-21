import React, {ReactNode} from 'react';
import style from './Text.module.css'

type TextProps = {
    children: ReactNode
}

export const Text = (props: TextProps) => {
    return (
        <div className={style.text}>
            <p>{props.children}</p>
        </div>
    )
};
