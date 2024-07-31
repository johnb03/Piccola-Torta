 export const movPage = document.querySelector(".movPage");

const btn_enviar = document.querySelector(".enviar");
//botones de movimiento
const btnDelante1 = document.querySelector(".btn__delante-1 ")
const btn_adelante2 = document.querySelector(".adelante__pag2");
const btn_atras2 = document.querySelector(".atras__pag2");
const btn_adelante3 = document.querySelector(".adelante__pag4");
const btn_atras3 = document.querySelector(".atras__pag3");
// barra de progreso
export const progressText = document.querySelectorAll(".paso p");
export const progresscheck = document.querySelectorAll(".paso .check");
export const num = document.querySelectorAll(".paso .num");
// recoleccion de datos
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
const resultEnvase = document.getElementById("result-envases");
//crear una base de elementos
function crearDiv(producto) {
  let div = document.createElement("div");
  div.classList.add("div-productos");
  div.innerHTML = producto.info;
  boxItems.append(div);
}

// productos
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
   <input  class=" aspect-square item-select border-blue-500  w-[18px]" data-nombre="${nombre}" data-precio ="${precio}" type="checkbox" >
    </div> 
    `;
  }
  verInfo() {
    crearDiv(this);
  }
}

let croquetasPollo = new bocadillos(
  ( "/public/image/imagenes de Productos/croquetas.jpg"),
  "corquetas",
  "de pollo",
  25
);

let pastelitosPollo = new bocadillos(
  ( "/public/image/imagenes de Productos/pastelitos.jpg"),
  "Pastelito",
  "de pollo",
  25
);

let bolitasDeYuca = new bocadillos(
  ( "/public/image/imagenes de Productos/Bolitas-de-yuca.jpg"),
  "Bolitas",
  "de yuca",
  25
);

let brochetasMixtas = new bocadillos(
  ( "/public/image/imagenes de Productos/Brochetas-mixtas.jpg"),
  "Brochetas",
  "Mixtas",
  35
);

let medallonesDeSalchicha = new bocadillos(
  ( "/public/image/imagenes de Productos/Medallones-de-salchicha.jpg"),
  "Medallones",
  "de salchicha",
  20
);

let miniAmburguesas = new bocadillos(
  ( "/public/image/imagenes de Productos/mini-amburguesas.jpg"),
  "Mini",
  "Amburguesas"
);

let miniSandwich = new bocadillos(
  ( "/public/image/imagenes de Productos/mini-sandwich.jpg"),
  "Mini",
  "Sandwich",
  25
);

let miniWraps = new bocadillos(
  ( "/public/image/imagenes de Productos/mini-wraps.jpg"),
  "Mini",
  "Sandwich",
  25
);

let empaQuesoCrema = new bocadillos(
  ( "/public/image/imagenes de Productos/Empanadillas.jpg"),
  "Empanadillas ",
  "de queso crema",
  35
);

let empaPolloHorneado = new bocadillos(
  ("/public/image/imagenes de Productos/Empanadillas.jpg"),
  "Empanadillas ",
  "de pollo horneado",
  35
);

let empaCamarones = new bocadillos(
  ( "/public/image/imagenes de Productos/Empanadillas-de-camarones.jpg"),
  "Empanadillas ",
  "de Camarones",
  40
);

let miniHotdogs = new bocadillos(
  ( "/public/image/imagenes de Productos/mini-hotdogs.jpg"),
  "Mini ",
  "Hot-dogs",
  75
);

let palitosMozarella = new bocadillos(
  ( "/public/image/imagenes de Productos/palitos-de-mozarella.jpg"),
  "Palitos ",
  "de mozarella",
  35
);

croquetasPollo.verInfo();
pastelitosPollo.verInfo();
bolitasDeYuca.verInfo();
brochetasMixtas.verInfo();
medallonesDeSalchicha.verInfo();
miniAmburguesas.verInfo();
miniSandwich.verInfo();
miniWraps.verInfo();
empaPolloHorneado.verInfo();
empaCamarones.verInfo();
empaQuesoCrema.verInfo();
miniHotdogs.verInfo();
palitosMozarella.verInfo();



//botones

export function buttonProgressCheck () {
    movPage.style.marginLeft = "-25%";
    num[cont - 1].classList.add("active");
    progresscheck[cont - 1].classList.add("active");
    cont +=1;
  
}
 


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
  } else  {
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

//seleccion de envases
function envases() {
  const envase1 = document.getElementById("r4");
  const envase2 = document.getElementById("r3");
  if (envase1.checked) {
    return envase1.value;
  }
  if (envase2.checked) {
    return envase2.value;
  }
}

// calculo total del presupuesto
function calcularTotal() {
  const cantidad = parseFloat(inputNumber.value);
  resultEnvase.textContent = ` Envase elegido: ${envases()}`;
  resulCantidad.textContent = `Excelente para ${cantidad} personas`;

  let selectedItems = document.querySelectorAll(".item-select:checked");
  resultBocadillos.innerHTML = ""; //limpia resultados anteriores

  let total = 0;

  selectedItems.forEach((item) => {
    const itemName = item.getAttribute("data-nombre");
    const itemPrice = parseFloat(item.getAttribute("data-precio"));

    const totalItemPrice = itemPrice * cantidad;

    let itemResult = document.createElement("p");
    itemResult.textContent = `${itemName} : cantidad  ${cantidad}`;
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


//botones atras----------------------------------



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

btn_enviar.addEventListener("click", () => {

  num[cont - 1].classList.add("active");
  progresscheck[cont - 1].classList.add("active");
  cont += 1;

  Swal.fire({
    title: "Excelente!",
    text: "Tu presupuesto de ah enviado!",
    icon: "success",
  });

  setTimeout(() => {
    location.reload();
  }, 2000);
});


