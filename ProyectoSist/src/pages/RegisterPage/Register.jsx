<<<<<<< HEAD
import { useState } from "react";
import { LOGIN_URL } from "../../constants/urls";
import { registerwithemailandpassword, signInWithGoogle } from "../../firebase/auth-service";
=======
import { Link, useNavigate } from "react-router-dom";
>>>>>>> chat
import styles from "./Register.module.css"
import { LOGIN_URL } from "../../constants/urls";
import { HOME_URL } from "../../constants/urls";
import { registerWithEmailAndPassword, signInWithGoogle } from "../../firebase/auth/index";
import { useState } from "react";


export const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
<<<<<<< HEAD
        name: null,
        email: null,
        password: null,
=======
        name: "",
        lastName: "",
        email: "",
        password: "",
<<<<<<< HEAD
        tipoUsuario: "",
>>>>>>> chat
=======
        tipoUsuario: "paciente",
>>>>>>> 7dd766cb3954c866c19ea9425a3cc803da0d8da9
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

<<<<<<< HEAD
    const onSubmit = async(event) => {
        event.preventDefault()
        console.log(formData)
        await registerwithemailandpassword(formData.email, formData.password)
    }
=======
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
>>>>>>> chat

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
<<<<<<< HEAD
                        <input type="text" className="form-control" id="InputName" name="name" onChange={handleOnChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="InputLastName" name="lastName" onChange={handleOnChange}/>
=======
                        <input type="text" className={`form-control ${styles.input}`} id="InputName" name="name" placeholder="John" onChange={handleOnChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Apellido</label>
                        <input type="text" className={`form-control ${styles.input}`} id="InputLastName" name="lastName" placeholder="Doe" onChange={handleOnChange}/>
>>>>>>> chat
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Correo</label>
<<<<<<< HEAD
                        <input type="email" className="form-control" id="InputEmail1" name="email" aria-describedby="emailHelp" onChange={handleOnChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="InputPassword1" name="password" onChange={handleOnChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirmar contraseña</label>
                        <input type="password" className="form-control" id="InputPassword2" name="check_password" onChange={handleOnChange}/>
=======
                        <input type="email" className={`form-control ${styles.input}`} id="InputEmail1" name="email" aria-describedby="emailHelp" placeholder="JohnDoe@gmail.com" onChange={handleOnChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input type="password" className={`form-control ${styles.input}`} id="InputPassword1" name="password" placeholder="*******" onChange={handleOnChange}/>
>>>>>>> chat
                    </div>
                    
                    <div className="input-group mb-3 d-flex justify-content-evenly">
                        <div className="input-group-text">
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
                            <input className="form-check-input mt-0" type="radio" id="paciente" value="Paciente" name="tipoUsuario" aria-label="paciente" />
=======
                            <input className="form-check-input mt-0" type="radio" id="paciente" value="Paciente" name="tipoUsuario" aria-label="paciente" onChange={handleOnChange}/>
>>>>>>> 7dd766cb3954c866c19ea9425a3cc803da0d8da9
                            <label className="ms-2">Paciente</label>
                        </div>
                        <div className="input-group-text">
                            <input className="form-check-input mt-0" type="radio" id="doctor" value="Doctor" name="tipoUsuario" aria-label="doctor" onChange={handleOnChange}/>
                            <label className="ms-2">Doctor</label>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className={`btn btn-primary py-2 mt-2 ${styles.registerButton}`}>Registrarse</button>
>>>>>>> chat
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