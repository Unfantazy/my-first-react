import {messagesPagePropsType} from "./store";

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let initialState: messagesPagePropsType = {
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
    ],
    newMessageText: ""
}

export const dialogsReducer = (state: messagesPagePropsType = initialState, action: any) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_TEXT: {
            return  {
                ...state,
                newMessageText: action.text
            }
            // stateCopy.newMessageText = action.text
            // return stateCopy
        }
        case ADD_MESSAGE: {
            let body = state.newMessageText
            return  {
                ...state,
                newMessageText: "",
                messagesData: [...state.messagesData, {id: 6, message: body}]
            }
            // stateCopy.messagesData.push({id: 6, message: body})
            // stateCopy.newMessageText = ""
            // return stateCopy
        }
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, text})