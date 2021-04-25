
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyClRnf71eZAc8qRpljz2CVISmz4GjaGUjg",
      authDomain: "kwitter-661c3.firebaseapp.com",
      projectId: "kwitter-661c3",
      storageBucket: "kwitter-661c3.appspot.com",
      messagingSenderId: "396078563161",
      appId: "1:396078563161:web:6f5b6128490d5a1b3e1648"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
