import React from "react";
import styles from './Profile.module.css'

function Profile(){
    return(
        <div class="justify-content-evenly d-flex container-xl px-4 mt-4">
   
    <hr class="mt-0 mb-4">
    </hr>
    <div class="row">
        <div class="col-xl-4">

            {/* <!-- Foto de Perfil--> */}
            <div class={`card mb-4 mb-xl-0 ${styles.imagen}`}>
                <div class="card-header">Foto de Perfil</div>
                <div class="card-body text-center">

                    {/* <!-- Foto de Perfil Imagen--> */}
                    <img class="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                    
                    {/* <!-- Foto de Perfil Ayuda a Usuario--> */}
                    <div class="small font-italic text-muted mb-4">JPG y PNG, no más de 5 MB</div>
                    
                    {/* <!-- Botón para Cargar Nueva Imagen--> */}
                    <button class="btn btn-primary" type="button">Cargar nueva imagen</button>
                </div>
                </div>
            </div>
        </div>
        
        <div class="col-xl-8">

            {/* <!-- Detalles de la Cuenta--> */}
            <div class="card mb-4">
                <div class="card-header">Detalles de la Cuenta</div>
                <div class="card-body">
                    <form>

                        {/* <!-- Formulario--> */}
                        <div class="row gx-3 mb-3">

                            {/* <!-- Nombre--> */}
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">Nombre</label>
                                <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value="Valerie"/>
                            </div>

                            {/* <!-- Apellido--> */}
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLastName">Apellido</label>
                                <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value="Luna"/>
                            </div>
                        </div>

                        {/* <!-- Formulario--> */}
                        <div class="row gx-3 mb-3">

                            {/* <!-- Ubicación--> */}
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLocation">Ubicación</label>
                                <input class="form-control" id="inputLocation" type="text" placeholder="Enter your location" value="San Francisco, CA"/>
                            </div>
                        </div>

                        {/* <!-- Email--> */}
                        <div class="mb-3">
                            <label class="small mb-1" for="inputEmailAddress">Email</label>
                            <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="name@example.com"/>
                        </div>

                        {/* <!-- Formulario--> */}
                        <div class="row gx-3 mb-3">

                            {/* <!-- Número de Telefono--> */}
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputPhone">Número de Telefono</label>
                                <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="555-123-4567"/>
                            </div>

                            {/* <!-- Fecha de Nacimiento--> */}
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputBirthday">Fecha de Nacimiento</label>
                                <input class="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" value="06/10/1988"/>
                            </div>
                        </div>

                        {/* <!-- Botón para Guardar cambios--> */}
                        <button class="btn btn-primary" type="button">Guardar cambios</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Profile