
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC2yKzS84Xlr92oQEOrFVRoa8LDTpOGM7s",
      authDomain: "kwitter-ac9f7.firebaseapp.com",
      databaseURL: "https://kwitter-ac9f7-default-rtdb.firebaseio.com",
      projectId: "kwitter-ac9f7",
      storageBucket: "kwitter-ac9f7.appspot.com",
      messagingSenderId: "71976450967",
      appId: "1:71976450967:web:b827e7488de882460ee2d2"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
