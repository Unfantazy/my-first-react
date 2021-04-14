let initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false
}

let FOLLOW = "FOLLOW"
let UNFOLLOW = "UNFOLLOW"
let SET_USERS = "SET_USERS"
let SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
let SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
let TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

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

        default:
            return state
    }
}


export const followAC = (userId: string) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: any) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})