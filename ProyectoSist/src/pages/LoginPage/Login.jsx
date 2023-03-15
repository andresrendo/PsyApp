import styles from './Login.module.css'
import { REGISTER_URL } from '../../constants/urls'

export const Login = () => {

    const handleSignWithGoogle = async () => {
        await signInWithGoogle()
    };

    return(
        <div className='d-flex justify-content-evenly flex-wrap'>
            <div className='img-container'>
                <img src="https://clinicavicent.com/wp-content/uploads/2021/06/psicologia-educativa-1.png" className={styles.image} />
            </div>

            <div className='pt-5 px-3'>
                <p>¿No tienes cuenta? <a href={REGISTER_URL}>Registrate aqui</a></p>
                <h2>Iniciar sesión</h2>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Correo</label>
                        <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="InputPassword1"/>
                    </div>
                    <button type="submit" className={`btn btn-primary ${styles.button1}`}>Iniciar</button>
                </form>

                    <button type="button" onClick={handleSignWithGoogle} className={`btn btn-secondary pb-2 ${styles.button2}`}>Continuar con Google</button>

            </div>
        </div>
    )
}