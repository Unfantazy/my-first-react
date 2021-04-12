let initialState = {
    users: [
        //     {
        //     id: 1,
        //     followed: true,
        //     fullName: 'Angelina',
        //     status: "I know React",
        //     location: {city: "Tula", country: "Russia"},
        //     photoUrl: "https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-520-couple-avatar-girls-image_1177386.jpg"
        // },
        //     {
        //         id: 2,
        //         followed: true,
        //         fullName: 'Andrew',
        //         status: "I know React",
        //         location: {city: "Kaluga", country: "Russia"},
        //         photoUrl: "https://cdn.iconscout.com/icon/free/png-512/boy-avatar-4-1129037.png"
        //     },
        //     {
        //         id: 3,
        //         followed: false,
        //         fullName: 'Dimych',
        //         status: "I'm a boss ",
        //         location: {city: "Minsk", country: "Belarus"},
        //         photoUrl: "https://toppng.com/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png"
        //     },
    ],

}

let FOLLOW = "FOLLOW"
let UNFOLLOW = "UNFOLLOW"
let SET_USERS = "SET_USERS"

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
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state
    }
}


export const followAC = (userId: string) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: any) => ({type: SET_USERS, users})