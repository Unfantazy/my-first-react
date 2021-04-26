import React, {ChangeEvent} from "react";
import s from '../styles/dialogs.module.css';
import {DialogItem} from "./Dialog/DialogItem";
import {DialogMessage} from "./Dialog/DialogMessage";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../redux/dialogs-reducer";
import {messagesPagePropsType} from "../redux/store";
import { Redirect } from "react-router-dom";


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
    //dispatch: (action: { type: string, message?: string }) => void
    updateNewMessageText:(text: string ) => void
    sendMessage:() => void
    messagesPage: messagesPagePropsType
    newMessageText: string
    isAuth: boolean
}


export function Dialogs(props: dialogsPropsType) {

    let state = props.messagesPage;
    let dialogsElements = state.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messagesData.map(message => <DialogMessage key={message.id} message={message.message}/>)



    const addMessage = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // if (newDialogElement.current) {
        //     let text: string = newDialogElement.current.value;
        //     let action = updateNewMessageTextActionCreator(text)
        //     props.dispatch(action)
        // }
        let text = e.currentTarget.value
        props.updateNewMessageText(text)
    }

   if(!props.isAuth) {
       return <Redirect to={"/login"} />
   }

    return (
        <div className={s.dialogs__wrapper}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>

                <div className={s.dialogs__messages}>
                    {messagesElements}
                </div>
            </div>
            <div className={s.dialogs__add}>
            <textarea className={s.dialogs__textarea}
                      placeholder={"Enter your message..."}
                      onChange={onNewMessageChange}
                      value={props.newMessageText}
            ></textarea>
                <button type="button" className={s.dialogs__btn} onClick={addMessage}>Send</button>
            </div>
        </div>
    );
}
