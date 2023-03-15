import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css"
import { LOGIN_URL } from "../../constants/urls";
import { HOME_URL } from "../../constants/urls";
import { registerWithEmailAndPassword, signInWithGoogle } from "../../firebase/auth/index";
import { useState } from "react";


export const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSignWithGoogle = async () => {
        await signInWithGoogle();
        navigate("/");
    };

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
      };

    const onSubmit = async (event) => {
        try{
          event.preventDefault();
          const {email, password, name} = formData;
          await registerWithEmailAndPassword({ email, password, name});
          navigate("/");
        } catch (err) {
          console.log(err)
        }
      };

    return(

        <div className='d-flex justify-content-evenly flex-wrap'>
            <div className='d-flex align-items-center'>
                <img src="https://agsmedico.com/img/especialidades/Psicologia.png" className={styles.image}/>
            </div>

            <div className="pt-5 px-3">
                <h2 className={styles.registerTitle}>Registrarse</h2>
                <p>¿Ya tienes una cuenta? <a href={LOGIN_URL} className={styles.anchor}>Accede aqui</a></p>
                
                <form className={styles.formFormat}>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" className={`form-control ${styles.input}`} id="InputName" name="name"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Apellido</label>
                        <input type="text" className={`form-control ${styles.input}`} id="InputName" name="lastName"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Correo</label>
                        <input type="email" className={`form-control ${styles.input}`} id="InputEmail1" name="email" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input type="password" className={`form-control ${styles.input}`} id="InputPassword1" name="password"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirmar contraseña</label>
                        <input type="password" className={`form-control ${styles.input}`} id="InputPassword1"/>
                    </div>
                    
                    <div class="input-group mb-3 d-flex justify-content-evenly">
                        <div class="input-group-text">
                            <input class="form-check-input mt-0" type="radio" id="paciente" value="Paciente" name="tipoUsuario" aria-label="paciente" />
                            <label className="ms-2">Paciente</label>
                        </div>
                        <div class="input-group-text">
                            <input class="form-check-input mt-0" type="radio" id="doctor" value="Doctor" name="tipoUsuario" aria-label="doctor" />
                            <label className="ms-2">Doctor</label>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className={`btn btn-primary py-2 mt-2 ${styles.registerButton}`}>Registrarse</button>
                    </div>

                    <div className={`d-flex align-items-center justify-content-between my-2 ${styles.containerDivisor}`}>
                        <div className={styles.division}></div>
                        O
                        <div className={styles.division}></div>
                    </div>

                    <button type="button" onClick={handleSignWithGoogle} className={`btn btn-secondary mt-2 py-2 mb-5 ${styles.button2}`}>Continuar con <i class="fa-brands fa-google"></i>oogle</button>
                    
                </form>                    
            </div>
        </div>
    );
}