import s from "../../styles/dialogs.module.css";
import React from "react";

type DialogMessage = {
    message: string
}
export function DialogMessage(props: DialogMessage) {
    return (
        <div className={s.dialog__message}>{props.message}</div>
    )
}