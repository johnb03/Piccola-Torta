



//app cotizaciones
// -------------------
// escuchar los inputs
//primero esuchar el numero de personas y la cantidad por persona





function cantidad(){
    const cPerson = document.getElementById('cPerson').value;
    const uPerson = document.getElementById('uPerson').value;
    const pband = document.getElementById('pBand').value;
    const hotCards = document.getElementById('hot-cards').value;
    
  hotCards = ["Quipe de pollo", "Quipe de res","Quipe de queso"];


   

   

   const toTal = ` ${cPerson * uPerson}  </br> ${pband} </br> ${hotCards} `;
    console.log(toTal)
   
}




//escuchar las selecciones 
// multiplicar el numero de productos  por la cantidad de personas 
//luego mostrar la cantidad de dinero total 
// informacion de cada picadera y cantidad
