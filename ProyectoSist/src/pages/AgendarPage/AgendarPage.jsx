import React, { useState } from 'react'
import styles from './AgendarPage.module.css'
import { Button } from 'react-bootstrap'
import { Calendar } from '../../components/Calendar/Calendar'
import { Time } from '../../components/Time/Time';
// import { PayButton } from '../../components/PayPal/payButton';
import { PayPalButton } from "react-paypal-button-v2";


export const AgendarPage = () => {
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);

    function validate() {
        if (!date || !time) {
            alert('Por favor, seleccione una fecha y hora para su cita')
            return false
        } else {
            console.log(date.$d.getDate()) // esto obtiene el dia
            console.log(date.$d.getMonth()) // esto obtiene el mes
            console.log(date.$d.getFullYear()) // esto obtiene el año
            console.log(time.$d.getHours()) // esto obtiene la hora
            console.log(time.$d.getMinutes()) // esto obtiene los minutos
            return true
        }
    }

    const createOrder = (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                currency_code: "USD",
                value: "43.00" // el valor de la cita, en este caso $43
              }
            }
          ]
        });
      };
    
      const onApprove = (data, actions) => {
        return actions.order.capture().then(function(details) {
          // Aquí puedes hacer lo que quieras después de que se complete el pago
          alert('Cita creada exitosamente');
        });
      };

    const pay = () => {
        if (validate()) {
            alert('Cita creada exitosamente')
        }
    }

    return (
        <div className='d-flex justify-content-evenly flex-wrap mt-5 align-items-center'>
            <div className={`mb-5 ${styles.profileContainer}`}>
                <div className='d-flex justify-content-center mb-4'>
                    <h2>Amanda Sanz</h2>
                </div>

                <div className='d-flex justify-content-center'>
                    <img src='https://usil-blog.s3.amazonaws.com/PROD/blog/image/psicologos-formacion.bilingue.jpg' className={styles.image}/>
                </div>

                <div className={`d-flex justify-content-evenly my-4 ${styles.redes}`}>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                </div>
                <div className='d-flex justify-content-center'>
                    {/* <PayButton /> */}
                    <PayPalButton
                            createOrder={createOrder}
                            onApprove={onApprove}
                            className="paypal-button-container"
                        />
                    {/* <button type="button" className={`btn py-2 text-light ${styles.payButton}`} onClick={pay}>Realizar pago</button> */}
                    {/* <div><i className={`fa-brands fa-cc-paypal ms-2
                    ${styles.paypal}`}></i></div> */}
                </div>
            </div>
            
            <div className={`p-4 mb-5 ${styles.orderContainer}`}>
                <h4 className='text-center'>Resumen de orden</h4>
                <div className={`my-4 ${styles.text}`}>
                    <h5>Citas: 1</h5>
                    <p>Subtotal: 40$</p>
                    <p>Tax: 3$</p>
                </div>
                <h5 className='text-center'>Total: 43$</h5>
            </div>

            <div>
                <Calendar date={date} setDate={setDate} />
                <div className='mt-4'>
                    <Time time={time} setTime={setTime} />
                </div>
            </div>
        </div>
    )
}