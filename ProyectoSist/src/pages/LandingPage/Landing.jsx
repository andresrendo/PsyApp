import React from 'react'
import styles from './Landing.module.css'
import landing1 from './../../assets/landing1.png'
import landing2 from './../../assets/landing2.png'

function Landing() {
  return (
    <div>
    <div className='d-flex justify-content-evenly flex-wrap'>
        <div className= "pt-5 px-3">
          <img className= {styles.img1} src={landing1}/>
        </div>

        <div>
          <h2 className= "pt-5">Obten la estabilidad que necesitas</h2>
          <br></br>
          <p>Cuida tu salud mental en todo momento y con el doctor de tu preferencia con nosotros.</p>
          <br></br>
          <button type="submit" className = {`btn btn-primary ${styles.button2}`}>Conocenos</button>
        </div>
      
    </div>
    <div className= "d-flex flex-wrap">
      <div className= "pt-5 px-5 mt-4">
        <h2>¿Cómo funcionamos?</h2>
        <br></br>
        <h4>Nuestros psicologos te otorgaran ayuda en línea. Puedes empezar hoy mismo.</h4>
        <br></br>
        <h2>Agenda tu cita online. </h2>
        <br></br>
        <h4>Elige la hora y el día que desees para empezar tus consultas.</h4>
        <br></br>
        <button type="submit" className = {`btn btn-primary mb-5 ${styles.button2}`}>Comienza aquí</button>
      </div>
      <div className= "pt-5 px-3">
          <img src={landing2} className={styles.img2}/>
      </div>
    </div>
    </div> 
  )

}

export default Landing