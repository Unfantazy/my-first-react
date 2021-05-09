import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";


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

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

