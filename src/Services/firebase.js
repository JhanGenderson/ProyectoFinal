import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyADHBF-JPWIJa2ss78y7LPLnj6I_1l8mAY",
    authDomain: "proyectofirebase-83e0a.firebaseapp.com",
    projectId: "proyectofirebase-83e0a",
    storageBucket: "proyectofirebase-83e0a.appspot.com",
    messagingSenderId: "931570566484",
    appId: "1:931570566484:web:5d5d4409c3a87b793bf4c1"
  };
  // Initialize Firebase

  const fire= firebase.initializeApp(firebaseConfig);
  const storage= firebase.storage();

  export{
      fire,storage,firebase
  }