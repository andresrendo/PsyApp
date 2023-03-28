import React from 'react'
import styles from './Landing.module.css'
import landing1 from './../../assets/landing1.png'
import landing2 from './../../assets/landing2.png'

function Landing() {
  return (
    <><div className='d-flex justify-content-evenly flex-wrap mt-5 pt-3'>
      <div>
        <img src="https://img.freepik.com/vector-gratis/reunion-negocios-lluvia-ideas-equipo-personas-que-trabajan-oficina-comunicacion-corporativa-hombres-mujeres-sentados-negociando-estudiando_575670-2062.jpg?w=360" />
      </div>
      <div>
        <h4>Obten la estabilidad que necesitas</h4>
        <p>Cuida tu salud mental en todo momento y con el doctor de tu preferencia con nosotros</p>
        <button type="submit" className={`btn btn-primary ${styles.button2}`}>Conocenos</button>
      </div>

    </div><div className="d-flex flex-wrap">
        <div className="pt-5 px-5 mt-4">
          <h2>¿Cómo funcionamos?</h2>
          <br></br>
          <h4>Nuestros psicologos te otorgaran ayuda en línea. Puedes empezar hoy mismo.</h4>
          <br></br>
          <h2>Agenda tu cita online. </h2>
          <br></br>
          <h4>Elige la hora y el día que desees para empezar tus consultas.</h4>
          <br></br>
          <button type="submit" className={`btn btn-primary mb-5 ${styles.button2}`}>Comienza aquí</button>
        </div>
        <div className="pt-5 px-3">
          <img src={landing2} className={styles.img2} />
        </div>
      </div></>
  )

}

export default Landing