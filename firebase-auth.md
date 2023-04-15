<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAztLu-ygFbsRPhFRU4tIS2vDamFAk70Es",
    authDomain: "wages-website.firebaseapp.com",
    projectId: "wages-website",
    storageBucket: "wages-website.appspot.com",
    messagingSenderId: "485630602103",
    appId: "1:485630602103:web:bc6c3690f0463e202ccf72"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>


<!-- ------------------------------------------------ -->

 <script type="module">
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
        import { getDatabase, ref, set, child, get, onValue} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyAztLu-ygFbsRPhFRU4tIS2vDamFAk70Es",
            authDomain: "wages-website.firebaseapp.com",
            databaseURL: "https://wages-website-default-rtdb.firebaseio.com",
            projectId: "wages-website",
            storageBucket: "wages-website.appspot.com",
            messagingSenderId: "485630602103",
            appId: "1:485630602103:web:bc6c3690f0463e202ccf72"
        };

        // Initialize Firebase
        const userId = 'user1/';
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);
        const users = ref(database, 'Users/' + userId + 'username/');
        onValue(users, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
        });



    </script>
<script>
    <!-- Points Adding Function -->
    function addpnt(){
  const dbRef = ref(db);

  get(child(dbRef, `Users/` + user + "Wages")).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      update(ref(db, "Users/" + user ),
      {
        Wages : snapshot.val() + 0.5
      })
      .then(()=>{
        alert("user added Successfully");
      })
      .catch((error)=>{
        alert("error" + error);
      })
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

</script>