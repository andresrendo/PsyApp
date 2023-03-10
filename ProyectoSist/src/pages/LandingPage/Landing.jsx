import React from 'react'
import styles from './Landing.module.css'

function Landing() {
  return (
    <div className='d-flex justify-content-evenly flex-wrap'> 
        <div>
          <img src= "https://img.freepik.com/vector-gratis/reunion-negocios-lluvia-ideas-equipo-personas-que-trabajan-oficina-comunicacion-corporativa-hombres-mujeres-sentados-negociando-estudiando_575670-2062.jpg?w=360"/>
        </div>
        <div>
            <h4>Obten la estabilidad que necesitas</h4>
            <p>Cuida tu salud mental en todo momento y con el doctor de tu preferencia con nosotros</p>
            <button type="submit" className = {`btn btn-primary ${styles.button2}`}>Conocenos</button>
        </div>
    </div>
  )
}

export default Landing