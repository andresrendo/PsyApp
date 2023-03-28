import React from 'react'
import styles from './Landing.module.css'
import landing1 from './../../assets/landing1.png'
import landing2 from './../../assets/landing2.png'
import { ABOUT_US_URL, REGISTER_URL } from '../../constants/urls'

function Landing() {
  return (
    <><div className='d-flex justify-content-evenly flex-wrap mt-5 pt-3'>
      <div>
        <img src="/src/assets/landing1.png" />
      </div>
      <div className="pt-5 px-5 mt-4">
        <h2>Obten la estabilidad que necesitas</h2>
        <br></br>
        <h4>Cuida tu salud mental en todo momento y con el doctor de tu preferencia con nosotros</h4>
        <br></br>
        <a role="button" href={ABOUT_US_URL} className={`btn btn-primary ${styles.button2}`}>Conócenos</a>
      </div>

    </div><div className="d-flex flex-wrap">
        <div className="pt-5 px-5 mt-4">
          <h2>¿Cómo funcionamos?</h2>
          <br></br>
          <h4>Registrate, escoge uno de nuestros psicólogos, agenda tu cita, paga y listo.</h4>
          <br></br>
          <h2>Agenda tu cita online. </h2>
          <br></br>
          <h4>Elige la hora y el día que desees para empezar tus consultas.</h4>
          <h4>Chatea en línea con tu psicólogo.</h4>
          <br></br>
          <a role="button" href={REGISTER_URL} className={`btn btn-primary ${styles.button2}`}>Comienza aquí</a>
        </div>
        <div className="pt-5 px-3">
          <img src={landing2} className={styles.img2} />
        </div>
      </div></>
  )

}

export default Landing