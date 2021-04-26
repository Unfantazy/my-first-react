import React from "react";
import s from '../styles/dialogs.module.css';
import {DialogItem} from "./Dialog/DialogItem";
import {DialogMessage} from "./Dialog/DialogMessage";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {RootStateType} from "../redux/redux-store";
import {connect} from "react-redux";


export type dialogType = {
    id: number
    name: string
}
export type messageType = {
    id: number
    message: string
}
export type dialogsPropsType = {
    // dialogsData: Array<dialogType>
    // messagesData: Array<messageType>
    // dispatch: (action: { type: string, message?: string }) => void
    store: any
}


// export function DialogsContainer(props: dialogsPropsType) {
//
//     let messagesPage: RootStateType = props.store.getState();
//
//     const addMessage = () => {
//         props.store.dispatch(addMessageActionCreator())
//     }
//     const onNewMessageChange = (text: string) => {
//         props.store.dispatch(updateNewMessageTextActionCreator(text))
//     }
//
//     return (
//         <Dialogs updateNewMessageText={onNewMessageChange} sendMessage={addMessage}
//                  messagesPage={messagesPage.MessagesPage}/>
//     );
// }


let mapStateToProps = (state: any) => {
    return {
        messagesPage: state.MessagesPage,
        newMessageText: state.newMessageText,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)