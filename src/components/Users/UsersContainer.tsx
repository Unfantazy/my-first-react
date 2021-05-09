import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    followSuccess, getUsers,
    setCurrentPage, toggleFollowingInProgress, unfollow,
    unfollowSuccess
} from "../../redux/users-reducer";
import UsersFunc from "./Users";
import s from '../../styles/users.module.css';
import {Preloader} from "../common/Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class UsersAPI extends React.Component<any, any> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: any) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <div className={s.usersWrapper}>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersFunc totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}
            />
        </div>
    }
}

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const ActionCreators = {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingInProgress,
    getUsers
}

export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, ActionCreators)
)(UsersAPI)

// export const UsersContainer = WithAuthRedirect(connect(mapStateToProps, ActionCreators)(UsersAPI))