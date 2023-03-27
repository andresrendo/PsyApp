import React from "react";
import styles from './ContactUs.module.css'

function ContactUs(){
    return (
        <div>
            <section class="mb-4">

                <h2 class="h1-responsive font-weight-bold text-center my-4">Contáctanos</h2>
                <p class="text-center w-responsive mx-auto mb-5">¿Tienes alguna pregunta? No dudes en contactarnos directamente. Nuestro equipo no tardará en ponerse en contacto contigo.</p>

                <div class="row">

                    <div class="col-md-7 mb-md-0 mb-5 m-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div class="row">

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" name="name" class="form-control"/>
                                        <label for="name" class="">Tu nombre</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="email" name="email" class="form-control"/>
                                        <label for="email" class="">Tu Email</label>
                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <input type="text" id="subject" name="subject" class="form-control"/>
                                        <label for="subject" class="">Asunto</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">

                                <div class="col-md-12">

                                    <div class="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                        <label for="message">Déjanos saber tu inquietud</label>
                                    </div>

                                </div>
                            </div>

                        </form>

                        <div class="text-center text-md-left">
                            <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                        </div>
                        <div class="status"></div>
                    </div>
                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                <p>Ditribuidor metropolitano Caracas, 1060, Miranda</p>
                            </li>

                            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                <p>+ 58 424 1513251</p>
                            </li>

                            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
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