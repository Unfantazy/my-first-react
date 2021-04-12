import React from 'react'
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

// export const UsersContainer = () => {
//     return <div>
//         USERS WILL BE HERE
//     </div>
//
// }

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)