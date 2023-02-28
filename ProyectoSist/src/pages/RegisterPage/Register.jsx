import { useState } from "react";
import { LOGIN_URL } from "../../constants/urls";
import { registerwithemailandpassword, signInWithGoogle } from "../../firebase/auth-service";
import styles from "./Register.module.css"

export const Register = () => {

    const [formData, setFormData] = useState({
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
        await registerwithemailandpassword(formData.email, formData.password)
    }

    return(
        <div className='d-flex justify-content-evenly flex-wrap'>
            <div className='d-flex align-items-center'>
                <img src="https://agsmedico.com/img/especialidades/Psicologia.png" className={styles.image}/>
            </div>

            <div className="pt-5 px-3">
                <h2>Registrarse</h2>
                <p>¿Ya tienes una cuenta? <a href={LOGIN_URL} className={styles.anchor}>Accede aqui</a></p>
                
                <form className={styles.formFormat}>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="InputName" name="name" onChange={handleOnChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="InputLastName" name="lastName" onChange={handleOnChange}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Correo</label>
                        <input type="email" className="form-control" id="InputEmail1" name="email" aria-describedby="emailHelp" onChange={handleOnChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="InputPassword1" name="password" onChange={handleOnChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirmar contraseña</label>
                        <input type="password" className="form-control" id="InputPassword2" name="check_password" onChange={handleOnChange}/>
                    </div>
                    
                    <div className="input-group mb-3 d-flex justify-content-evenly">
                        <div className="input-group-text">
                            <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" name="pacient" onChange={handleOnChange}/>
                            <label className="ms-1">Paciente</label>
                        </div>
                        <div className="input-group-text">
                            <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" name="doctor" onChange={handleOnChange}/>
                            <label className="ms-1">Doctor</label>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" onClick={onSubmit} className={`btn btn-primary py-2 ${styles.registerButton}`}>Registrarse</button>
                    </div>
                    <button type="button" onClick={handleSignWithGoogle} className={`btn btn-secondary mt-2 py-2 mb-5 ${styles.button2}`}>Registrate con Google</button>
                    
                </form>                    
            </div>
        </div>
    );
}