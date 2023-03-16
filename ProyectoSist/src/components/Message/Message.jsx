import React from "react";
import style from "./Message.module.css";
import {auth} from "../../firebase/config";

export function Message({message}) {

    const messageClass = () => {
        if (message.uid === auth.currentUser.uid) {
            return `${style.sent}`
        } else {
            return `${style.received}`
        }
    }

    return (
        <div>
            <div className={`${style.message} ${messageClass}`}>
                <p className={style.name}>{message.name}</p>
                <p>{message.text}</p>
            </div>
        </div>
    )
}