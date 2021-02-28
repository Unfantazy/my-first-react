import {dialogType, messageType} from "../components/Dialogs";
import {postType} from "../components/Profile/Posts";

export type RootStateType = {
    posts: Array<postType>
    dialogsData: Array<dialogType>
    messagesData: Array<messageType>
}

export const state: RootStateType = {
    posts: [
        {id: 1, message: "Yo", likesCount: 12},
        {id: 2, message: "How're you", likesCount: 10}
    ],
    dialogsData: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Lena"},
        {id: 3, name: "Vasya"},
        {id: 4, name: "Denis"},
        {id: 5, name: "Andrey"}
    ],
    messagesData: [
        {id: 1, message: "Yo"},
        {id: 2, message: "How're you"},
        {id: 3, message: "I learn JS"},
        {id: 4, message: "Who are you"},
        {id: 5, message: "Yo"}
    ]
}