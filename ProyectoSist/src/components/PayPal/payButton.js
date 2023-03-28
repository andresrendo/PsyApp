// import { PayPalButton } from "react-paypal-button-v2";





// export const PayButton = () => {
//   const createOrder = (data, actions) => {
//     return actions.order.create({
//       purchase_units: [
//         {
//           amount: {
//             currency_code: "USD",
//             value: "43.00" // el valor de la cita, en este caso $43
//           }
//         }
//       ]
//     });
//   };
  
//   const onApprove = (data, actions) => {
//     return actions.order.capture().then(function(details) {
//       // Aquí puedes hacer lo que quieras después de que se complete el pago
//       alert('Cita creada exitosamente');
//     });
//   };
  
//   return (
//     <PayPalButton
//                         createOrder={createOrder}
//                         onApprove={onApprove}
//                         className="paypal-button-container"
//                     />
//   )
// };