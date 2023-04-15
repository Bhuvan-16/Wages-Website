import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, set, ref, child, get } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAztLu-ygFbsRPhFRU4tIS2vDamFAk70Es",
  authDomain: "wages-website.firebaseapp.com",
  databaseURL: "https://wages-website-default-rtdb.firebaseio.com",
  projectId: "wages-website",
  storageBucket: "wages-website.appspot.com",
  messagingSenderId: "485630602103",
  appId: "1:485630602103:web:bc6c3690f0463e202ccf72"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();


const name = document.getElementById('username');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const login_btn = document.getElementById('login-btn');
const request_btn = document.getElementById('request-id');


// -------------------- Auth Process --------------------

function AuthenticateUser() {
  const dataRef = ref(db);

  if (name.value == 'admin') {
    get(child(dataRef, "Users/" + name.value)).then((snapshot) => {
      if (snapshot.exists()) {
        let dbpass = snapshot.val().Password;
        if (dbpass == pass.value) {
          console.log(pass.value);
          adminLogin(snapshot.val());
        }
        else {
          alert("wrong username or password");
        }
      }
    });
  }
  else {
    get(child(dataRef, "Users/" + name.value)).then((snapshot) => {
      if (snapshot.exists()) {
        let dbpass = snapshot.val().Password;
        if (dbpass == pass.value) {
          console.log(pass.value);
          login(snapshot.val());
        }
        else {
          alert("user does not exist");
        }
      }
      else {
        alert("username and pass is wrong");
      }
    });
  }

}


// -------------------- Login --------------------

function adminLogin(user) {
  sessionStorage.setItem('user', JSON.stringify(user));
  window.location = 'adminConsole.html';
}

function login(user) {

  sessionStorage.setItem('user', JSON.stringify(user));
  window.location = 'dashboard.html';
}


login_btn.addEventListener('click', AuthenticateUser);

request_btn.onclick = function () {
  window.location.href = "requestID.html"
} 