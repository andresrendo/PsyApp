import styles from './ChatPeople.module.css';
import defaultProfile from '../../assets/defaultProfile.png';

export function ChatPeople({name}) {
    return (
        <div className={`d-flex align-items-center justify-content-start ${styles.container}`}>

            <div>
                <img src={defaultProfile} className={styles.chatImg} />
            </div>
            <div>
                <h5>{name}</h5>
            </div>

        </div>
    )
}