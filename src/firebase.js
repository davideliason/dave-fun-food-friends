import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCMmR1lWMoVaGhbo6Qjt_h_5JhTWqirp54",
    authDomain: "fun-food-friends-b0ba2.firebaseapp.com",
    databaseURL: "https://fun-food-friends-b0ba2.firebaseio.com",
    projectId: "fun-food-friends-b0ba2",
    storageBucket: "",
    messagingSenderId: "932714540433"
  };

firebase.initializeApp(config);
export default firebase;
