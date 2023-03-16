import styles from './Chat.module.css';
import { useState, useEffect, useRef } from 'react';
import { Message } from '../../components/Message/Message';
import { db } from '../../firebase/config';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import { SendMessage } from '../../components/SendMessage/SendMessage';
import { ChatPeople } from '../../components/ChatPeople/ChatPeople';

export function Chat() {

    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {

        const q= query(collection(db, "messages"), orderBy("timestamp"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = []

            querySnapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id})
            });
            setMessages(messages)
        });
        return () => unsubscribe();

    }, []);

    return (

        <div className={styles.container}>
            <div className={`d-flex m-4 pe-5 justify-content-center ${styles.chatContainer}`}>

                <div className={`ms-5 my-4 ${styles.peopleContainer}`}>
                    <div className={styles.people}>
                        <ChatPeople name="Doctor" />
                        <ChatPeople name="Doctora" />
                    </div>
                </div>

                <div className={`ms-3 my-4 p-2 ${styles.msgContainer}`}>

                    <div className={`${styles.mensajes}`}>
                        
                        <div className={`d-flex justify-content-center p-2 px-3 ms-2 mt-2  ${styles.nameBar}`}>
                            <h5 className='m-0 p-0 text-light'>Doctor</h5>
                        </div>

                        {messages && messages.map((message) => {
                            <Message key={message.id} message={message} />
                        })}
                        
                    </div>
                    
                    <SendMessage />

                </div>

            </div>
        </div>
        
    )
}