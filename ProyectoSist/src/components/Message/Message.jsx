import React from "react";
import style from "./Message.module.css";
import {auth} from "../../firebase/config";

export function Message({message}) {

    const messageClass =
        message.uid === auth.currentUser.uid ? `${style.sent}` : `${style.received}`;

    return (
        <div>
            <div className={`px-2 d-flex ${style.message} ${messageClass}`}>
                <p className={style.name}>{message.name}</p>
                <p>{message.text}</p>
            </div>
        </div>
    )
}