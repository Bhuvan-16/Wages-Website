import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, set , ref,child, get, update} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

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

//-------------------- Reference --------------------

const name = document.getElementById('username');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const login_btn = document.getElementById('login-btn');
const user_role = document.getElementById('role');

// -------------------- Register to firebase --------------------

function RegisterUser(){
  const dbRef = ref(db);

  get(child(dbRef, "Users/" + name.value)).then((snapshot)=>{
    if(snapshot.exists()){
      alert("exist");
    }else{
      set(ref(db, "Users/" + name.value),
      {
        Email : email.value,
        Password : pass.value,
        Username : name.value,
        Role : user_role.value,
        Wages : 0
      })
      .then(()=>{
        alert("user added Successfully");
      })
      .catch((error)=>{
        alert("error" + error);
      })
    }
  });
}


// -------------------- Sending data to firebase --------------------

login_btn.addEventListener('click', RegisterUser);