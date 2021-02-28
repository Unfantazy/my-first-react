import s from "../../styles/dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


type DialogItemType = {
    name: string
    id: number
}

export function DialogItem(props: DialogItemType) {
    return (
        <div className={s.dialog__item}><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}