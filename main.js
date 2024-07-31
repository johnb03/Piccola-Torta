import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "./js/firebase.js";

import "./js/googleLogin.js";
import "./js/logout.js";
import "./js/logIncheck.js";
import "./js/app.js"
import { loginCheck } from "./js/logIncheck.js";

onAuthStateChanged(auth, async (user) => {
 if (user) {
  loginCheck(user);
  
 } else{

 }
        
  
});
