import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import {auth, db} from "../../firebase/config";
import style from "./SendMessage.module.css";

export function SendMessage() {

    const [input, setInput] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault()
        if (input === '') {
            alert('No puedes enviar un mensaje vacío')
            return;
        }
        const {uid, displayName} = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setInput('')
    }

    return (
        <form onSubmit={sendMessage} className={`${style.form}`}>
            <div className="input-group mb-1">
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Escribe un mensaje"
                />
                <button className="btn btn-outline-secondary" type="submit"><i className="fa-solid fa-paper-plane"></i></button>
            </div>
        </form>
    )
}