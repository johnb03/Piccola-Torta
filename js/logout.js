import { signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "./firebase.js";

const logOut = document.getElementById('logout-btn');

logOut.addEventListener("click", async ()=>{
    await signOut(auth);
    window.location.href = window.location.href= "index.html";
    console.log("user Signout");
})