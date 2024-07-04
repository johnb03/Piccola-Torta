const movPage = document.querySelector(".movPage");
const btn_adelante = document.querySelector(".sigPage ");
const btn_enviar = document.querySelector(".enviar");

const btn_atras1 = document.querySelector(".atras__pag1 ");
const btn_adelante2 = document.querySelector(".adelante__pag2");
const btn_atras2 = document.querySelector(".atras__pag2");
const btn_adelante3 = document.querySelector(".adelante__pag4");
const btn_atras3 = document.querySelector(".atras__pag3");
const progressText = document.querySelectorAll(".paso p");
const progresscheck = document.querySelectorAll(".paso .check");
const num = document.querySelectorAll(".paso .num");

const datosFinales = document.getElementById("datos-finales");

let max = 4;
let cont = 1;

const r2 = document.getElementById("r2");
const r1 = document.getElementById("r1");
const inputNumber = document.getElementById("cant-personas");
const boxItems = document.getElementById("box-items");

// sumatoria final de productos
const totalElement = document.getElementById("total");
const resulCantidad = document.getElementById("result-cantidad");
const resultBocadillos = document.getElementById("result-bocadillos");

//crear una base de elementos
function crearDiv(producto) {
  let div = document.createElement("div");
  div.classList.add("div-productos");
  div.innerHTML = producto.info;
  boxItems.append(div);
}

class bocadillos {
  constructor(imagen, nombre, subProducto, precio) {
    this.imagen = imagen;
    this.nombre = nombre;
    this.subProducto = subProducto;
    this.precio = precio;
    this.info = `
    
    <img class="cardItem" src="${imagen}">
    <div>
    <h5 class="font-bold">${nombre}</h5>
    <p class="text-gray-400">${subProducto}</p>
    </div>

    <div class="flex justify-between">
    <p id="precio" class="font-bold "> $${precio}.00</p>
   <input  class=" item-select border-blue-500  w-[18px]" data-nombre="${nombre}" data-precio ="${precio}" type="checkbox" >
    </div> 
    `;
  }
  verInfo() {
    crearDiv(this);
  }
}

let croquetasPollo = new bocadillos(
  (src = "/public/image/croquetas.jpg"),
  "corquetas",
  "de pollo",
  23
);

let pastelitosPollo = new bocadillos(
  (src = "/public/image/croquetas.jpg"),
  "Pastelito",
  "de pollo",
  23
);

croquetasPollo.verInfo();
pastelitosPollo.verInfo();
pastelitosPollo.verInfo();
pastelitosPollo.verInfo();



//botones
btn_adelante.addEventListener("click", (e) => {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let email = document.getElementById("email").value;
  let numero = document.getElementById("numero").value;

  if (nombre == "") {
    document.getElementById("nombre-error").innerHTML = "*Se te olvido 😊*";
  } else if (apellido == "") {
    document.getElementById("apellido-error").innerHTML = "*upps😗*";
  } else if (email == "") {
    document.getElementById("email-error").innerHTML = "*Se te olvido 😊*";
  } else if (numero == "") {
    document.getElementById("numero-error").innerHTML = "*upps😗*";
  } else {
    document.getElementById("nombre-error").innerHTML = "";
    document.getElementById("apellido-error").innerHTML = "";
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("numero-error").innerHTML = "";
    movPage.style.marginLeft = "-25%";
    num[cont - 1].classList.add("active");
    progresscheck[cont - 1].classList.add("active");
    cont += 1;
  }
});

btn_adelante2.addEventListener("click", (e) => {
  e.preventDefault();

  let cantPersonas = document.getElementById("cant-personas").value;
  let r1 = document.getElementById("r1").checked;
  let r2 = document.getElementById("r2").checked;
  let r3 = document.getElementById("r3").checked;
  let r4 = document.getElementById("r4").checked;

  if (cantPersonas == "0") {
    document.getElementById("error-personas").innerHTML =
      "*Debes rellenarlo todo😗*";
  } else if (r1 == false && r2 == false) {
    document.getElementById("error-personas").innerHTML =
      "*Debes rellenarlo todo😗*";
  } else if (r3 == false && r4 == false) {
    document.getElementById("error-personas").innerHTML =
      "*Debes rellenarlo todo😗*";
  } else {
    movPage.style.marginLeft = "-50%";
    num[cont - 1].classList.add("active");
    progresscheck[cont - 1].classList.add("active");
    cont += 1;
  }
});

// obtener el valor de los input Cantidad de unidades
function unidadesxPer() {
  let maxItemselect = 3;
  if (r1.checked) {
    maxItemselect;
  }
  if (r2.checked) {
    maxItemselect = parseInt(r2.value);
  }
  return maxItemselect;
}

// validar los input check
function validarCheckBoxes() {
  const maxItemselect = unidadesxPer();
  const itemSelect = boxItems.querySelectorAll(".item-select");
  const itemCount = Array.from(itemSelect).filter(
    (checkbox) => checkbox.checked
  ).length;
  itemSelect.forEach((checkbox) => {
    if (!checkbox.checked && itemCount >= maxItemselect) {
      checkbox.disabled = true;
    } else {
      checkbox.disabled = false;
    }
  });
}

// escuchar solo los que con check
document.addEventListener("DOMContentLoaded", () => {
  const itemSelect = boxItems.querySelectorAll(".item-select");
  itemSelect.forEach((checkbox) => {
    checkbox.addEventListener("change", validarCheckBoxes);
  });

  r1.addEventListener("change", validarCheckBoxes);
  r2.addEventListener("change", validarCheckBoxes);
});

// unidadesxPer();

btn_adelante3.addEventListener("click", (e) => {
  

  const maxItemselect = unidadesxPer();
  const itemSelect = document.querySelectorAll(".item-select");
  const itemCount = Array.from(itemSelect).filter(
    (checkbox) => checkbox.checked
  ).length;

  if (itemCount >= maxItemselect) {
    movPage.style.marginLeft = "-75%";
    num[cont - 1].classList.add("active");
    progresscheck[cont - 1].classList.add("active");
    cont += 1;

    calcularTotal();
  

  } else {
    let errorSelecion = document.getElementById("title-seleccion");
    errorSelecion.classList.add("error3");
    errorSelecion.innerHTML = `*Debes seleccionar ${maxItemselect} como minimo*`;
  }
});

// calculo total del presupuesto
function calcularTotal() {
  const cantidad = parseFloat(inputNumber.value);
  resulCantidad.textContent = `Excelente para ${cantidad} personas`;

  let selectedItems = document.querySelectorAll(".item-select:checked");
  resultBocadillos.innerHTML = ""; //limpia resultados anteriores

  let total = 0;

  selectedItems.forEach((item) => {
    const itemName = item.getAttribute("data-nombre");
    const itemPrice = parseFloat(item.getAttribute("data-precio"));

    const totalItemPrice = itemPrice * cantidad;

    let itemResult = document.createElement("p");
    itemResult.textContent = `${itemName} : cantidad seleccionada ${cantidad}`;
    resultBocadillos.appendChild(itemResult);

    total += totalItemPrice;
  });

  totalElement.textContent = ` Total : $${total.toFixed(2)}`;
}

let seleccionados = [];
function obtenerSeleccionados(checkbox) {
  let nombre = checkbox.getAttribute("data-nombre");
  let precio = checkbox.getAttribute("data-precio");
  let pNumber = parseInt(precio);
  if (checkbox.checked) {
    seleccionados.push({ nombre, pNumber });
  } else {
    seleccionados = seleccionados.filter((item) => item.nombre !== nombre);
  }
}

document.addEventListener("change", function (event) {
  if (event.target.classList.contains("item-select")) {
    obtenerSeleccionados(event.target);
  }
});

//obtenert los input


//botones atras----------------------------------
btn_atras1.addEventListener("click", (e) => {
  e.preventDefault();

  movPage.style.marginLeft = "0%";
  num[cont - 2].classList.remove("active");
  progresscheck[cont - 2].classList.remove("active");
  cont -= 1;
});

btn_atras2.addEventListener("click", (e) => {
  e.preventDefault();

  movPage.style.marginLeft = "-25%";
  num[cont - 2].classList.remove("active");
  progresscheck[cont - 2].classList.remove("active");
  cont -= 1;
});

btn_atras3.addEventListener("click", (e) => {
  e.preventDefault();

  movPage.style.marginLeft = "-50%";
  num[cont - 2].classList.remove("active");
  progresscheck[cont - 2].classList.remove("active");
  cont -= 1;
});

btn_enviar.addEventListener("click", (e) => {
  Swal.fire({
    title: "Excelente!",
    text: "Tu presupuesto de ah enviado!",
    icon: "success",
  });

  setTimeout(() => {
    location.reload();
  }, 2000); 
});

//
