function carruselPoint(){
    const c_grande = document.querySelector(".c__grande");
    const punto = document.querySelectorAll(".punto");

    punto.forEach((cadaPunto, i) => {
        punto[i].addEventListener("click", () =>{
            let posicion = i;
            let operacion = posicion * - 25;

            c_grande.style.transform = `translateX(${operacion}%)`;
            punto.forEach((cadaPunto, i)=> {
                punto[i].classList.remove("activo");
            });
            punto[i].classList.add("activo");

        });
        
    });
}

carruselPoint();