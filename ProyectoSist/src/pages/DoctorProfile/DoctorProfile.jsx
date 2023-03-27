import styles from "./DoctorProfile.module.css"
import defaultProfile from "./../../assets/defaultProfile.png"
import { useState } from "react";
import { db } from '../../firebase/config';
import { getDoc, doc, collection, getDocs} from 'firebase/firestore';

export function DoctorProfile(props) {
    

    return (

        <div className={`d-flex flex-wrap justify-content-around align-items-center ${styles.profileContainer}`}>
            
            <div className={`mx-3`}>
                <img src={defaultProfile} alt="" className={styles.imgContainer}/>
                <div className={`d-flex justify-content-center my-4`}>
                    Stars
                </div>
                <div className={`d-flex justify-content-evenly`}>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>                    
                    <i class="fa-brands fa-linkedin"></i>
                </div>
            </div>

            <div className={`bg-primary`}>
                <h3>Amanda</h3>
            </div>

            <div  className={`mx-3`}>
                <h5>Formacion academica</h5>
            </div>
            
        </div>
    )
}