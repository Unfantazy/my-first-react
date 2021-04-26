import {usersAPI} from "../api/api";

let initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

let FOLLOW = "FOLLOW"
let UNFOLLOW = "UNFOLLOW"
let SET_USERS = "SET_USERS"
let SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
let SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
let TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
let TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

export const usersReducer = (state: any = initialState, action: any) => {

    switch (action.type) {

        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }

        case  SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case  SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }

        case  TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case  TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    //@ts-ignore
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state
    }
}


export const followSuccess = (userId: string) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId: string) => ({type: UNFOLLOW, userId})
export const setUsers = (users: any) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching: boolean, userId: string) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})


export const getUsers = (currentPage: any, pageSize: any) => {
    return (dispatch: any) => {

        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize)

            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}
export const follow = (userId: string) => {
    return (dispatch: any) => {

        dispatch(toggleFollowingInProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId))
            })
    }
}
export const unfollow = (userId: string) => {
    return (dispatch: any) => {

        dispatch(toggleFollowingInProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId))
            })
    }
}