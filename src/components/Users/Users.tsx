import React from 'react'
import s from '../../styles/users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/avatar.svg'

export const Users = (props: any) => {

    if (props.users.length === 0) {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    return <div className={s.users}>
        {props.users.map((u: any) =>
            <div key={u.id} className={s.userBlock}>

                <div className={s.userShow}>
                    <div className={s.userAvatar}>
                        <img
                            src={u.photos.small !== null ? u.photos.small : userPhoto}
                            alt="avatar"/>
                    </div>
                    <div className={s.userFollowBtnWrapper}>

                        {u.followed ?
                            <button className={s.userFollowBtn} type={"button"} onClick={() => {
                                props.unfollow(u.id)
                            }}>Follow</button> :
                            <button className={s.userFollowBtn} type={"button"} onClick={() => {
                                props.follow(u.id)
                            }}>Unfollow</button>}
                    </div>

                </div>

                <div className={s.userInfo}>
                    <div className={s.userInfoLeft}>
                        <div className={s.userInfoName}>{u.name}</div>
                        <div className={s.userInfoStatus}>{u.status}</div>
                    </div>
                    <div className={s.userInfoLocation}>
                        <span className={s.userInfoCountry}>{"u.location.country"},</span>
                        <span className={s.userInfoCity}>{"u.location.city"}</span>
                    </div>
                </div>
            </div>
        )}
    </div>

}