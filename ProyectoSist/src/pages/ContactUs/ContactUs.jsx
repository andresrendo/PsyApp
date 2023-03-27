import React from "react";
import styles from './ContactUs.module.css'

function ContactUs(){
    return (
        <div>
            <section className="mb-4">

                <h2 className="h1-responsive font-weight-bold text-center my-4">Contáctanos</h2>
                <p className="text-center w-responsive mx-auto mb-5">¿Tienes alguna pregunta? No dudes en contactarnos directamente. Nuestro equipo no tardará en ponerse en contacto contigo.</p>

                <div className="row">

                    <div className="col-md-7 mb-md-0 mb-5 m-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div className="row">

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" className="form-control"/>
                                        <label htmlFor="name" className="">Tu nombre</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="form-control"/>
                                        <label htmlFor="email" className="">Tu Email</label>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject" className="form-control"/>
                                        <label htmlFor="subject" className="">Asunto</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-12">

                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                        <label htmlFor="message">Déjanos saber tu inquietud</label>
                                    </div>

                                </div>
                            </div>

                        </form>

                        <div className="text-center text-md-left">
                            <a className="btn btn-primary" onClick={() => {document.getElementById('contact-form').submit();}}>Send</a>
                        </div>
                        <div className="status"></div>
                    </div>
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>Ditribuidor metropolitano Caracas, 1060, Miranda</p>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>+ 58 424 1513251</p>
                            </li>

                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>d.daniel@correo.unimet.edu.ve</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default ContactUs