
 export function modal  () {
 const steps = ['1', '2', '3']
const Queue = Swal.mixin({
  progressSteps: steps,
  confirmButtonText: 'Next >',
  // optional classes to avoid backdrop blinking between steps
  showClass: { backdrop: 'swal2-noanimation' },
  hideClass: { backdrop: 'swal2-noanimation' },
})

;(async () => {
  await Queue.fire({ 
    title: 'Es importante que sepas!',
    text:' que para poder agendar tu orden debes realizar el pago del mismo ya sea efectivo o tarjeta',
    currentProgressStep: 0,
  })
  await Queue.fire({
    title: 'Para nosotros es importante la satisfacción de nuestros clientes',
    text:' por eso, debes agendar minimo 48 horas a 72 Horas dependiendo la cantidad, para poder manejar la disponibilidad del producto a elegir. ',
    currentProgressStep: 1,
  })

  await Queue.fire({
    title: 'Confirma tu cotizacion',
    text: ' atravez del boton contactanos llegaras a nuestro whatsapp ',
    currentProgressStep: 2,
    confirmButtonText: 'OK',
  })

  window.location.href = window.location.href= "index.html";
})()
}


// window.addEventListener("load", ()=>{
  

//   const steps = ['1', '2', '3']
//   const Queue = Swal.mixin({
//     progressSteps: steps,
//     confirmButtonText: 'Next >',
//     // optional classes to avoid backdrop blinking between steps
//     showClass: { backdrop: 'swal2-noanimation' },
//     hideClass: { backdrop: 'swal2-noanimation' },
//   })
  
//   ;(async () => {
//     await Queue.fire({ 
//       title: 'Primero',
//       text:'Es importante que sepas! , que para poder agendar tu orden debes realizar el pago del mismo ya sea efectivo o tarjeta',
//       currentProgressStep: 0,
//     })
//     await Queue.fire({
//       title: 'Segundo',
//       text:'Para nosotros es importante la satisfacción de nuestros clientes por eso, debes agendar minimo 48 horas a 72 Horas dependiendo la cantidad, para poder manejar la disponibilidad del producto a elegir. ',
//       currentProgressStep: 1,
//     })

//     await Queue.fire({
//       title: 'Tercero',
//       text: ' costo de delivery es adicional.',
//       currentProgressStep: 2,
//       confirmButtonText: 'OK',
//     })
//   })()


// })


