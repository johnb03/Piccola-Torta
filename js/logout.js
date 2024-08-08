import { signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "./firebase.js";
import {modal} from "./clausula.js"
const logOut = document.getElementById('logout-btn');

logOut.addEventListener("click", async ()=>{
  modal()
  await signOut(auth);   
 
 
    
 console.log("user Signout");
})