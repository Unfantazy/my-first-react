import React from "react";
import s from '../styles/dialogs.module.css';
import { DialogItem } from "./Dialog/DialogItem";
import { DialogMessage } from "./Dialog/DialogMessage";

export type dialogType = {
    id: number
    name: string
}
export type messageType = {
    id: number
    message: string
}
export type dialogsPropsType = {
    dialogsData: Array<dialogType>
    messagesData: Array<messageType>
}

export function Dialogs(props: dialogsPropsType) {




    let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.messagesData.map(message => <DialogMessage message={message.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}

                {dialogsElements}
            </div>

            <div className={s.dialogs__messages}>
                {/*<DialogMessage message={messagesData[0].message}/>*/}

                {messagesElements}
            </div>
        </div>
    );
}
