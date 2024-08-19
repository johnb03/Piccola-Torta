import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import {analytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js"

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDleDtpctF0Ru5N4zcLt8btOmy0sYuem0M",
  authDomain: "piccola-torta.firebaseapp.com",
  projectId: "piccola-torta",
  storageBucket: "piccola-torta.appspot.com",
  messagingSenderId: "779982570102",
  appId: "1:779982570102:web:cbcbf37d305d9b446b1557",
  measurementId: "G-9EQ3DD89W5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);



