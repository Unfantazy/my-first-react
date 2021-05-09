import React from "react";
import s from '../styles/profile.module.css';
import {Posts, postsPropsType, postType} from "./Profile/Posts";
import {ProfileInfo} from "./Profile/ProfileInfo";
import {PostsContainer} from "./Profile/PostsContainer";
import {StoreType} from "../redux/store";
import {updateStatus} from "../redux/profile-reducer";


type ProfilePropsType ={
    // store: any
}

export function Profile(props: any) {

    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <PostsContainer />
        </div>
    )
}

