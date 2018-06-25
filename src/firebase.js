import firebase from 'firebase';

var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "fun-food-friends-b0ba2.firebaseapp.com",
    databaseURL: "https://fun-food-friends-b0ba2.firebaseio.com",
    projectId: "fun-food-friends-b0ba2",
    storageBucket: "",
    messagingSenderId: process.env.MESSENGER_SENDING_ID
  };

firebase.initializeApp(config);
export default firebase;
