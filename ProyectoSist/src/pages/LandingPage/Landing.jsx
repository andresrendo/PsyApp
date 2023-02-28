import React from 'react'
import styles from './Landing.module.css'

function Landing() {
  return (
    <div>
    <div className='d-flex justify-content-evenly flex-wrap'>
        <div className= "pt-5 px-3">
          <img className= {styles.img} src= "https://o.remove.bg/downloads/79a25eb7-8f93-4bf7-bda6-a832eb9bda58/m%C3%A9dico-con-estetoscopio-en-el-ordenador-de-escritorio-del-lugar-trabajo-sonriente-cardi%C3%B3logo-sentado-la-silla-puesto-mesa-202088375-removebg-preview.png"/>
        </div>

        <div>
          <h2 className= "pt-5">Obten la estabilidad que necesitas</h2>
          <br></br>
          <p>Cuida tu salud mental en todo momento y con el doctor de tu preferencia con nosotros.</p>
          <br></br>
          <button type="submit" className = {`btn btn-primary ${styles.button2}`}>Conocenos</button>
        </div>
      
    </div>
    <div className= "d-flex">
      <div className= "pt-5 px-5">
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
          <img src= "https://o.remove.bg/downloads/f151fa5a-21bf-4ff8-80c3-0900ec016e94/reunion-negocios-lluvia-ideas-equipo-personas-que-trabajan-oficina-comunicacion-corporativa-hombres-mujeres-sentados-negociando-estudiando_575670-2062-removebg-preview.png"/>
      </div>
    </div>
    </div> 
  )

}

export default Landing