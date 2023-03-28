import React from "react";
import styles from './AboutUs.module.css'
  

function AboutUs(){
    return(
        <div className="m-4 row d-flex flex-row justify-content-start">
            <div className="col-lg">
                <h1 className="text-center display-4 font-weight-light">Conoce más acerca de nosotros</h1>
                <br></br>
                <h2 className="text-dark text-center  ">¿Quienes somos?</h2>
                <br></br>
                <p className="text-dark text-center"> Somos un equipo de estudiantes de la Universidad Metropolitana de Venezuela que quieren conectar a usuarios de todo el mundo con psicólogos en un mismo lugar.</p>
            </div>
            <div className="container py-5">
                <div className="row mb-4">
                    <div className="col-lg">
                        <h1 className="text-center display-4 font-weight-light">Nuestro equipo</h1>
                        <br></br>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="/src/assets/JuanFoto.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                        <h5 className="mb-0">Juan Araque</h5><span className="small text-uppercase text-muted">Founder - Developer</span>
                        <p>Estudiante de Ingenieria de Sistemas en la Universidad Metropolitana de Venezuela.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://lh3.googleusercontent.com/a/AGNmyxbMEFyzPY-BRqceWCsVXIFoTkeW2cwv8FmnZKhV=s48-c" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                            <h5 className="mb-0">Andrés Rendo</h5><span className="small text-uppercase text-muted">Founder - Developer</span>
                            <p>Estudiante de Ingenieria de Sistemas en la Universidad Metropolitana de Venezuela.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="/src/assets/SebastianF.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                            <h5 className="mb-0">Sebastián Márquez</h5><span className="small text-uppercase text-muted">Founder - Developer</span>
                            <p>Estudiante de Ingenieria de Sistemas en la Universidad Metropolitana de Venezuela. Me gusta hacer Tik-Toks con mi pana Santi Perez, AKA el "PAPA".</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="/src/assets/DanielFoto.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                            <h5 className="mb-0">Daniel D'Angelo</h5><span className="small text-uppercase text-muted">Founder - Developer</span>
                            <p>Estudiante de Ingenieria de Sistemas en la Universidad Metropolitana de Venezuela, aficionado de la música y de los viajes por toda Venezuela.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="/src/assets/LeandroFoto.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                            <h5 className="mb-0">Leandro Perestrelo</h5><span className="small text-uppercase text-muted">Founder - Developer</span>
                            <p>Estudiante de Ingenieria de Sistemas en la Universidad Metropolitana de Venezuela, aficionado del fútbol y de las salidas con su pareja en Venezuela.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs