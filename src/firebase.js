import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyBeP2dSZKRqiNMsJJedyq2xJKKG6B4iGa4",
  authDomain: "kavacha-a81c6.firebaseapp.com",
  projectId: "kavacha-a81c6",
  storageBucket: "kavacha-a81c6.appspot.com",
  messagingSenderId: "733879070429",
  appId: "1:733879070429:web:ab804b4f215f8ebf9db534",
  measurementId: "G-G2D3EJGFNE"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
