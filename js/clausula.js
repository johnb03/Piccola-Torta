import { EnviarWhatsapp} from "./whatsaapMensaje.js"
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
    text:' por eso, debes agendar como maximo  48 horas  Horas antes de la actividad dependiendo la cantidad, esto con el fin de poder organizarnos y entregale a tiempo. ',
    currentProgressStep: 1,
  })

  await Queue.fire({
    title: 'Confirma tu cotizacion',
    text: ' Atravez de whatsapp confirmaremos tu pedido ya hallas realizado el pago correspondiente ',
    currentProgressStep: 2,
    confirmButtonText: 'OK',
  })

  EnviarWhatsapp()
  window.location.href = window.location.href= "index.html";
  
})()
}






