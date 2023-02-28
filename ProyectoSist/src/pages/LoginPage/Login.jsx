import styles from './Login.module.css'
import { REGISTER_URL } from '../../constants/urls'

export const Login = () => {
    return(
        <div className='d-flex justify-content-evenly flex-wrap'>
            <div className='img-container'>
                <img src="https://clinicavicent.com/wp-content/uploads/2021/06/psicologia-educativa-1.png" className={styles.image} />
            </div>

            <div>
                {/* <Link to={REGISTER_URL}>¿No tienes cuenta?{" "} <span>Registrate</span></Link> */}
                <a href={REGISTER_URL}>¿No tienes cuenta?{" "} <span>Registrate</span></a>
                <h2>Iniciar sesión</h2>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Correo</label>
                        <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="InputPassword1"/>
                    </div>
                    <button type="submit" className={`btn btn-primary ${styles.button1}`}>Iniciar</button>
                </form>
                    <button type="submit" className="btn btn-secondary">Continuar con Google</button>
            </div>
        </div>
    )
}