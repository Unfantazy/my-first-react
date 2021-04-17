import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";


let reducer = combineReducers({
    profilePage: profileReducer,
    MessagesPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type RootStateType = ReturnType<typeof reducer>


export let store = createStore(reducer)

//@ts-ignore
window.store = store