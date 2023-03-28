import styles from './Cargando.module.css'

export function Cargando() {
    return (
        <div className={`d-flex justify-content-center align-items-center ${styles.container}`}>

            <div className={`spinner-grow ${styles.green} me-4 ${styles.spinner}`} role="status"></div>

            <div className={`spinner-grow text-secondary me-4 ${styles.spinner}`} role="status"></div>

            <div className={`spinner-grow ${styles.green} ${styles.spinner}`} role="status"></div>

        </div>
    );
}