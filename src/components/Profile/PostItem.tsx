import React from "react";
import s from '../../styles/post.module.css';

type PostType = {
    text: string
    avatar: string
    like: number
}

export function MyPost(props: PostType) {
    return (
        <div className={s.post}>
            <a className={s.post__img} href={"#"}>
                <img src={props.avatar} alt=""/>
            </a>
            <div className={s.post__text}>
                {props.text}
            </div>
            {/*<div className={s.post__like}>like:{props.like}</div>*/}
        </div>

    )
}