import styles from "./DoctorProfile.module.css"
import defaultProfile from "./../../assets/defaultProfile.png"
import { useState } from "react";
import { db } from '../../firebase/config';
import { getDoc, doc, collection, getDocs} from 'firebase/firestore';
import { Link, useLocation, useParams } from "react-router-dom";
import { AGENDAR_URL } from "../../constants/urls";

export function DoctorProfile(props) {
    
    
    const location = useLocation();
    const data = location.state?.data;
    const areas = data.area_de_atencion;

    
    //console.log(areas);
    //console.log(data.nombre);
    //console.log(location.state);


    return (

        <div className={`d-flex flex-wrap justify-content-evenly align-items-center mt-5`}>
            
            <div className={`p-3 ${styles.profileContainer}`}>
                <h3>{data.nombre}</h3>
                <h4>Psicoterapeuta</h4>
                <p>{data.experiencia}</p>
                <h3>Areas de atencion</h3>
                <ul>
                {areas.map((especialidad) => {
                    return (<li key={especialidad}> {especialidad}</li>)
                })}
                </ul>

                <h4>Sobre mi</h4>
                <p>{data.descripcion}</p>
            </div>

            <div  className={`mx-3 ${styles.formacionCont}`}>
                <h5>Formacion academica</h5>
                <p>{data.formacion}</p>
                <h6>Idioma: {data.idioma}</h6>
                <h6>Nacionalidad: {data.nacionalidad}</h6>
                <h6>Edad: {data.edad}</h6>
                <Link to={AGENDAR_URL} state={{data: data}}>
                    <button type="submit" className={`btn mt-3 ${styles.btn1}`}>Agendar Cita</button>
                </Link>
            </div>
            
            <div className={`mx-3`}>
                <img src={data.foto} alt="" className={styles.imgContainer}/>
                <div className={`d-flex justify-content-center my-4`}>
                    Stars
                </div>
                <div className={`d-flex justify-content-evenly`}>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>                    
                    <i class="fa-brands fa-linkedin"></i>
                </div>
            </div>

            
        </div>
    )
}