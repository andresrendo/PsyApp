import styles from './Login.module.css'
import { REGISTER_URL } from '../../constants/urls'

export const Login = () => {

    const handleSignWithGoogle = async () => {
        await signInWithGoogle()
    };

    return(
        <div className={`d-flex justify-content-evenly flex-wrap align-items-center ${styles.loginContainer}`}>
            <div className='img-container'>
                <img src="https://clinicavicent.com/wp-content/uploads/2021/06/psicologia-educativa-1.png" className={styles.image} />
            </div>


            <div className='my-5'>
                {/* <Link to={REGISTER_URL}>¿No tienes cuenta?{" "} <span>Registrate</span></Link> */}
                <span>¿No tienes cuenta? <a href={REGISTER_URL} className={styles.anchor}>Registrate aqui{" "}</a></span>
                <h2 className={`mt-3 mb-3 ${styles.loginTitle}`}>Iniciar sesión</h2>
                <form>
                    <div className="mb-3">
                        <label className={`form-label`}>Correo</label>
                        <input type="email" className={`form-control ${styles.input}`} id="InputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-4">
                        <label className={`form-label`}>Contraseña</label>
                        <input type="password" className={`form-control ${styles.input}`} id="InputPassword1"/>
                    </div>
                    <button type="submit" className={`btn btn-primary ${styles.button1}`}>Iniciar</button>
                </form>

                    <div className={`d-flex align-items-center justify-content-between mb-3 ${styles.containerDivisor}`}>
                        <div className={styles.division}></div>
                        O
                        <div className={styles.division}></div>
                    </div>

                    <button type="button" onClick={handleSignWithGoogle} className={`btn btn-secondary pb-2 ${styles.button2}`}>Continuar con <i class="fa-brands fa-google"></i>oogle</button>

            </div>
        </div>
    )
}