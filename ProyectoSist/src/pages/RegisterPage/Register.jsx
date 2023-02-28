import { LOGIN_URL } from "../../constants/urls";
import { signInWithGoogle } from "../../firebase/auth-service";
import styles from "./Register.module.css"

export const Register = () => {

    const [] = useState({
        name: null,
        email: null,
        password: null,
    });

    const handleSignWithGoogle = async () => {
        await signInWithGoogle()
    };

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value})
    }

    const onSubmit = async(event) => {
        event.preventDefault()
        console.log(formData)
    }

    return(
        <div className='d-flex justify-content-evenly flex-wrap'>
            <div className='d-flex align-items-center'>
                <img src="https://agsmedico.com/img/especialidades/Psicologia.png" className={styles.image}/>
            </div>

            <div className="pt-5 px-3">
                <h2>Registrarse</h2>
                <p>¿Ya tienes una cuenta? <a href={LOGIN_URL}>Accede aqui</a></p>
                
                <form className={styles.formFormat}>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="InputName" name="name"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="InputName" name="lastName"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Correo</label>
                        <input type="email" className="form-control" id="InputEmail1" name="email" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="InputPassword1" name="password"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirmar contraseña</label>
                        <input type="password" className="form-control" id="InputPassword1"/>
                    </div>
                    
                    <div class="input-group mb-3 d-flex justify-content-evenly">
                        <div class="input-group-text">
                            <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                            <label className="ms-1">Paciente</label>
                        </div>
                        <div class="input-group-text">
                            <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                            <label className="ms-1">Doctor</label>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className={`btn btn-primary py-2 ${styles.registerButton}`}>Registrarse</button>
                    </div>
                    <button type="button" onClick={handleSignWithGoogle} className="btn btn-secondary">Registrate con Google</button>
                    
                </form>                    
            </div>
        </div>
    );
}