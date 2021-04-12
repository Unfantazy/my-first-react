import React from "react";
import s from '../styles/profile.module.css';
import {Posts, postsPropsType, postType} from "./Profile/Posts";
import {ProfileInfo} from "./Profile/ProfileInfo";
import {PostsContainer} from "./Profile/PostsContainer";
import {StoreType} from "../redux/store";


type ProfilePropsType ={
    // store: any
}

export function Profile(props: ProfilePropsType) {


    return (
        <div className={s.content}>
            <ProfileInfo/>
            <PostsContainer />
        </div>
    )
}

