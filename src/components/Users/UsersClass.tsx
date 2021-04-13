import React from 'react'
import s from '../../styles/users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/avatar.svg'

class Users extends React.Component<any, any> {

    // constructor(props: any) {
    //     super(props);
    // }
    //

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: any) => {
        this.props.setCurrentPage(pageNumber)

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })

    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div className={s.users}>

            <div className={s.pagination}>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? s.selectedPage : s.paginationPage}
                                 onClick={(e) => {
                                     this.onPageChanged(p)
                                 }}> {p} </span>
                })}
            </div>

            {
                this.props.users.map((u: any) =>
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
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</button> :
                                    <button className={s.userFollowBtn} type={"button"} onClick={() => {
                                        this.props.follow(u.id)
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
}

export default Users;