import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={`d-flex justify-content-around align-items-center ${styles.footer}`}>
        <div className={styles.icons}>
            <i className="fa-brands fa-facebook-f me-3"></i>
            <i className="fa-brands fa-instagram me-3"></i>
            <i className="fa-brands fa-twitter me-3"></i>
            <i className="fa-brands fa-whatsapp me-3"></i>
            <i className="fa-brands fa-youtube"></i>
        </div>
        <div>
            <p className={`p-0 m-0 ${styles.footerText}`}>© PsyApp, 2023.</p>
        </div>
    </footer>
  )
}