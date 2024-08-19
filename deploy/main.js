import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth, analytics } from "./js/firebase.js";
import "./js/clausula.js";
import "./js/whatsaapMensaje.js"
import "./js/googleLogin.js";
import "./js/logout.js";
import "./js/logIncheck.js";
import "./js/app.js"
import { loginCheck } from "./js/logIncheck.js";



onAuthStateChanged(auth, async (user) => {
    analytics;
    if (user) {
  loginCheck(user);
  
 } else{

 }
 
  
});
