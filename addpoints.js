import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, set, ref, child, get, onValue, push , update} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

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
let sumbit_btn = document.getElementById('submit');
let show_btn = document.getElementById('get_wages');
var currentUser = null;


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

function Workers_list() {
    $('#dataMenu option').remove();
    const dbRef = ref(db, "Users");

    onValue(
        dbRef,
        (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();
                const name = childData.Username;

                var row = "<option value=" + '"' + name + '"' + ">" + name + "</option>";
                $(row).appendTo('#dataMenu');

            });
        },
        {
            onlyOnce: true,
        }
    );
};


sumbit_btn.onclick = function(){
    const username = document.getElementById('dataMenu').value + "/";
    const points = document.getElementById('points').value;
    
    const dbRef = ref(db);

    get(child(dbRef, `Users/` + username + "Wages")).then((snapshot) => {
        if (snapshot.exists()) {
            update(ref(db, "Users/" + username),
                {
                    Wages: snapshot.val() + Number(points)
                })
                .then(() => {
                    alert("points added Successfully");
                })
                .catch((error) => {
                    alert("error" + error);
                })
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

show_btn.onclick = function(){
    const dbRef = ref(db);
    const username = document.getElementById('dataMenu').value + "/";


    get(child(dbRef, `Users/` + username + "Wages")).then((snapshot) => {
        if (snapshot.exists()) {
            $("div#value label").html(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}
