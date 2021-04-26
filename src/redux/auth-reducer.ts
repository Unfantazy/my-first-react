import {authAPI} from "../api/api";

let initialState = {
    id: null,
    email:null ,
    login: null,
    isFetching: false,
    isAuth: false
}

let SET_USER_DATA = "SET_USER_DATA"

export const authReducer = (state: any = initialState, action: any) => {

    switch (action.type) {

        case SET_USER_DATA: {

            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }

        default:
            return state
    }
}


export const setAuthUserData = (userId: string, email: string, login: string) => ({type: SET_USER_DATA, data: {userId, email, login}})
export const getAuthUserData = () => (dispatch:any) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login ));
            }
        })
}

