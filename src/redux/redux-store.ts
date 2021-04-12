import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";


let reducer = combineReducers({
    profilePage: profileReducer,
    MessagesPage: dialogsReducer,
    usersPage: usersReducer
})

export type RootStateType = ReturnType<typeof reducer>


export let store = createStore(reducer)

//@ts-ignore
window.store = store