import {dialogType, messageType} from "../components/Dialogs";
import {postType} from "../components/Profile/Posts";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";


export type RootStateType = {
    profilePage: profilePagePropsType
    MessagesPage: messagesPagePropsType
}

type profilePagePropsType = {
    posts: Array<postType>
    newPostText: string
}


export type messagesPagePropsType = {
    dialogsData: Array<dialogType>
    messagesData: Array<messageType>
    newMessageText: string
}

type AddPostActionType = {
    type: 'ADD-POST'
}

type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

type UpdateNewMessageTextActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    text: string
}

type AddMessageActionType = {
    type: "ADD-MESSAGE"
    text: string
}

export type ActionType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateNewMessageTextActionType

export type StoreType = {
    //_state: RootStateType
    getState: () => RootStateType
    //_callSubscriber: (state: RootStateType) => void
    // addMessage: (dialogMessage: string) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: any) => void
}


// export let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: "Yo", likesCount: 12},
//                 {id: 2, message: "How're you", likesCount: 10}
//             ],
//             newPostText: ""
//         },
//         MessagesPage: {
//             dialogsData: [
//                 {id: 1, name: "Dimych"},
//                 {id: 2, name: "Lena"},
//                 {id: 3, name: "Vasya"},
//                 {id: 4, name: "Denis"},
//                 {id: 5, name: "Andrey"}
//             ],
//             messagesData: [
//                 {id: 1, message: "Yo"},
//                 {id: 2, message: "How're you"},
//                 {id: 3, message: "I learn JS"},
//                 {id: 4, message: "Who are you"},
//                 {id: 5, message: "Yo"}
//             ],
//             newMessageText: ""
//         },
//     },
//     getState() {
//         return this._state
//     },
//     _callSubscriber(state: RootStateType) {
//         console.log('state is changed')
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action: ActionType) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.MessagesPage = dialogsReducer(this._state.MessagesPage, action)
//         this._callSubscriber(this._state)
//     }
// }






