import React from 'react'
import s from '../../styles/users.module.css';
import userPhoto from '../../assets/images/avatar.svg'

export let Users = (props: any) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={s.users}>

        <div className={s.pagination}>
            {pages.slice(0, 10).map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : s.paginationPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}> {p} </span>
            })}
        </div>

        {
            props.users.map((u: any) =>
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
                                }}>Unfollow</button> :
                                <button className={s.userFollowBtn} type={"button"} onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
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
            )
        }
    </div>
}

export default Users;