import React from 'react'
import s from '../../styles/users.module.css';

export const Users = (props: any) => {


    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: true,
                fullName: 'Angelina',
                status: "I know React",
                location: {city: "Tula", country: "Russia"},
                photoUrl: "https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-520-couple-avatar-girls-image_1177386.jpg"
            },
            {
                id: 2,
                followed: true,
                fullName: 'Andrew',
                status: "I know React",
                location: {city: "Kaluga", country: "Russia"},
                photoUrl: "https://cdn.iconscout.com/icon/free/png-512/boy-avatar-4-1129037.png"
            },
            {
                id: 3,
                followed: false,
                fullName: 'Dimych',
                status: "I'm a boss ",
                location: {city: "Minsk", country: "Belarus"},
                photoUrl: "https://toppng.com/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png"
            },
        ])
    }


    return <div className={s.users}>
        {props.users.map((u: any) =>
            <div key={u.id} className={s.userBlock}>

                <div className={s.userShow}>
                    <div className={s.userAvatar}>
                        <img
                            src={u.photoUrl}
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
                        <div className={s.userInfoName}>{u.fullName}</div>
                        <div className={s.userInfoStatus}>{u.status}</div>
                    </div>
                    <div className={s.userInfoLocation}>
                        <span className={s.userInfoCountry}>{u.location.country},</span>
                        <span className={s.userInfoCity}>{u.location.city}</span>
                    </div>
                </div>
            </div>
        )}
    </div>

}