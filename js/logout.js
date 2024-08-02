import { signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "./firebase.js";

const logOut = document.getElementById('logout-btn');

logOut.addEventListener("click", async ()=>{
    await signOut(auth);   

  Swal.fire({
    title: "Excelente!",
    text: "Tu presupuesto de ah enviado correctamente",
    icon: "success",
  });

  setTimeout(() => {

    window.location.href = window.location.href= "index.html";
  }, 3000);
        
    
 console.log("user Signout");
})