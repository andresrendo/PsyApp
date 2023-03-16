import styles from "./Login.module.css"
import { REGISTER_URL } from '../../constants/urls'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginWithEmailAndPassword, signInWithGoogle } from "../../firebase/auth/index";


export const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData]= useState({
        email: "",
        password: "",
      })

    const onSubmit = async (event) => {
        try{
            event.preventDefault();
            const {email, password} = formData;
            await loginWithEmailAndPassword( email, password )
            navigate("/");
        } catch (err) {
            console.log(err)
        }
    };
    

    const handleSignWithGoogle = async () => {
        await signInWithGoogle()
        navigate("/");
    };

    const handleOnChange = (event) => {
        const { name, value } = event.target;
          setFormData({
            ...formData,
            [name]: value
          })
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
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className={`form-label`}>Correo</label>
                        <input type="email" className={`form-control ${styles.input}`} id="InputEmail1" aria-describedby="emailHelp" placeholder="nombre@gmail.com" name="email" onChange={handleOnChange}/>
                    </div>
                    <div className="mb-4">
                        <label className={`form-label`}>Contraseña</label>
                        <input type="password" className={`form-control ${styles.input}`} id="InputPassword1" placeholder="*******" name="password" onChange={handleOnChange}/>
                    </div>
                    <button type="submit" className={`btn btn-primary ${styles.button1}`}>Iniciar</button>
                </form>

                    <div className={`d-flex align-items-center justify-content-between mb-3 ${styles.containerDivisor}`}>
                        <div className={styles.division}></div>
                        O
                        <div className={styles.division}></div>
                    </div>

                    <button type="button" onClick={handleSignWithGoogle} className={`btn btn-secondary pb-2 ${styles.button2}`}>Continuar con <i className="fa-brands fa-google"></i>oogle</button>

            </div>
        </div>
    )
}