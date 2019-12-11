import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDJ03h_wd7PaagxCWRIraQGjqdJf8K2Zk4",
  authDomain: "contact-book-f539a.firebaseapp.com",
  databaseURL: "https://contact-book-f539a.firebaseio.com",
  projectId: "contact-book-f539a",
  storageBucket: "contact-book-f539a.appspot.com",
  messagingSenderId: "142745563860",
  appId: "1:142745563860:web:eb511dbf20ba9c63cbc141"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;