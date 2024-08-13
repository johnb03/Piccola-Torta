// https://api.whatsapp.com/send?phone=(... pais)(codigo de area)(numero sin el 15)&text=


export function EnviarWhatsapp(){
  let  phoneNumber = " https://api.whatsapp.com/send?phone=18497015300&text=";
    const resultadoCantidad = document.querySelector("#result-cantidad").textContent;
    const  resultadoEnvase = document.querySelector("#result-envases").textContent;
    const  resultadoVocadillos= document.querySelector("#result-bocadillos").textContent;
    const  resultadoTotal= document.querySelector("#total").textContent;

    let url =  phoneNumber +"%20"
     + resultadoCantidad +" " + "%20 "
     + resultadoEnvase +" " + "%20 "
     + resultadoVocadillos +" " + "%20 "
     + resultadoTotal;
    // return url;

    window.open(url, '_blank').focus();
}


