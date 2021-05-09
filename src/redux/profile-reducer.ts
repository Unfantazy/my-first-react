import {postType} from "../components/Profile/Posts";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

let initialState = {
    posts: [
        {id: 1, message: "Yo", likesCount: 12},
        {id: 2, message: "How're you", likesCount: 10}
    ],
    newPostText: "",
    profile: null,
    status: ""
}

export const profileReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: postType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }

            // stateCopy.posts.push(newPost)
            // state.posts.push(newPost)
            // state.newPostText = ""
            // stateCopy.newPostText = ""
            // return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
            // stateCopy.newPostText = action.newText
            // return stateCopy
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
            // stateCopy.newPostText = action.newText
            // return stateCopy
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
            // stateCopy.newPostText = action.newText
            // return stateCopy
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string) => ({type: SET_STATUS, status})
export const getUserProfile = (userId: string) => (dispatch: any) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const getStatus = (userId: string) => (dispatch: any) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}