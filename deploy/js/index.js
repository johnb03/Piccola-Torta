


const inputSearch = document.getElementById("input-search");
const mobileMenu = document.getElementById("mobile-menu");

//hover buttones
mobileMenu.addEventListener('click', (e) =>{
  console.log(e.target.tagName);
  if(e.target && e.target.tagName === 'svg', 'path' ,'div')
  e.target.classList.toggle('iconHover')
})

//remueve el icono al hacer focus en el input
inputSearch.addEventListener('focus', () =>{
  let lupa = inputSearch.nextElementSibling;
  lupa.classList.add("hidden");
  
  document.addEventListener("click",(event) =>{
if(!inputSearch.contains(event.target)){
  lupa.classList.remove("hidden")
}

  })
 
})

 