import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ChatBtn.module.css';
import chat from '../../assets/chat.png';
import { CHAT_URL } from '../../constants/urls';

export function ChatBtn() {
  return (
    <Link to={CHAT_URL}>
        <div className='mt-4 d-flex justify-content-end'>
            <div className={`d-flex justify-content-center align-items-center me-4 mb-4 ${styles.chat}`}>
                <img src={chat} className={styles.chatImg}/>
            </div>
        </div>
    </Link>
  );
}