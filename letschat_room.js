// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCROuBlsWNbkusGqU0UOnNFRUp39swj72Q",
      authDomain: "kwitter-49ad8.firebaseapp.com",
      databaseURL: "https://kwitter-49ad8-default-rtdb.firebaseio.com",
      projectId: "kwitter-49ad8",
      storageBucket: "kwitter-49ad8.appspot.com",
      messagingSenderId: "1072135668708",
      appId: "1:1072135668708:web:7291bbac3b6934e9497df1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location - "letschat_page.html";
}
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
                  document.getElementById("output").innerHTML+=row;
            });
      });
}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="letschat_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}