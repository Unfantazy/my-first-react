import React from "react";
import s from '../styles/profile.module.css';
import {Posts, postsPropsType} from "./Profile/Posts";
import {ProfileInfo} from "./Profile/ProfileInfo";


export function Profile(props: postsPropsType) {


    return (
        <div className={s.content}>
            <ProfileInfo/>
            <Posts posts={props.posts}/>

        </div>
    )
}
