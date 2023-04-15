import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, set, ref, child, get,onValue, push } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

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

var currentUser = null;
let addPoints = document.getElementById('addpoints');


function getUsername(){

    currentUser = JSON.parse(sessionStorage.getItem('user'));
    
}

window.onload = function(){
    getUsername();
    if(currentUser == null ){
        window.location.href = 'error.html'
    }else if(currentUser.Username != 'admin'){
        window.location.href = 'error.html'
    }
    else{
        Workers_list();
    }
}

function Workers_list(){
    $('#datatable td').remove();
    const dbRef = ref(db, "Users");

    onValue(
        dbRef,
        (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();
                const name = childData.Username;

                var row = "<tr><td>" + name.toUpperCase() + "</td><td>" + childData.Role + "</td><td>" + "$ " +childData.Wages + "</td></tr>";
                $(row).appendTo('#datatable');

            });
        },
        {
            onlyOnce : true,
        }
    );
}


addPoints.onclick = function () {
    window.location.href = "addPoints.html";
}