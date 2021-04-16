import {postType} from "../components/Profile/Posts";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
    posts: [
        {id: 1, message: "Yo", likesCount: 12},
        {id: 2, message: "How're you", likesCount: 10}
    ],
    newPostText: "",
    profile: null
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
            return  {
                ...state,
                newPostText: action.newText
            }
            // stateCopy.newPostText = action.newText
            // return stateCopy
        }
        case SET_USER_PROFILE: {
            return  {
                ...state,
               profile: action.profile
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