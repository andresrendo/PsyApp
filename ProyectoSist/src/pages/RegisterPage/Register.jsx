
import { useState } from "react";
import { LOGIN_URL } from "../../constants/urls";
import { registerwithemailandpassword, signInWithGoogle } from "../../firebase/auth-service";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css"
import { HOME_URL } from "../../constants/urls";


export const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        tipoUsuario: "",
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

    const onSubmit = async(event) => {
        event.preventDefault()
        console.log(formData)
        await registerwithemailandpassword(formData.email, formData.password)
    }
    const onSubmit = async (event) => {
        try{
          event.preventDefault();
          const {email, password, name, lastName ,tipoUsuario} = formData;
          await registerWithEmailAndPassword({ email, password, name, lastName ,tipoUsuario, password});
          console.log(formData)
          navigate("/");
        } catch (error) {
          let message;
            switch (error.code) {
                case "auth/email-already-in-use":
                    message = "El correo electrónico ya está en uso.";
                    break;
                case "auth/invalid-email":
                    message = "El correo electrónico no es válido.";
                    break;
                case "auth/operation-not-allowed":
                    message = "La operación no está permitida.";
                    break;
                case "auth/weak-password":
                    message = "La contraseña debe tener al menos 6 caracteres.";
                    break;
                default:
                    message = "Ocurrió un error al intentar crear la cuenta.";
            }
            alert(message);
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
                
                <form className={styles.formFormat} onSubmit= {onSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" className={`form-control ${styles.input}`} id="InputName" name="name" onChange={handleOnChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Apellido</label>
                        <input type="text" className={`form-control ${styles.input}`} id="InputLastName" name="lastName" onChange={handleOnChange}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Correo</label>
                        <input type="email" className="={`form-control ${styles.input}`} id="InputEmail1" name="email" aria-describedby="emailHelp" onChange={handleOnChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input type="password" className={`form-control ${styles.input}`} id="InputPassword1" name="password" onChange={handleOnChange}/>
                    </div>
                    <div className="input-group mb-3 d-flex justify-content-evenly">
                            <input className="form-check-input mt-0" type="radio" id="paciente" value="Paciente" name="tipoUsuario" aria-label="paciente" onChange={handleOnChange}/>
                            <label className="ms-2">Paciente</label>
                        </div>
                        <div className="input-group-text">
                            <input className="form-check-input mt-0" type="radio" id="doctor" value="Doctor" name="tipoUsuario" aria-label="doctor" onChange={handleOnChange}/>
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

                    <button type="button" onClick={handleSignWithGoogle} className={`btn btn-secondary mt-2 py-2 mb-5 ${styles.button2}`}>Continuar con <i className="fa-brands fa-google"></i>oogle</button>
                    
                </form>                    
            </div>
        </div>
    );
}