import * as firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOQKtPmtFCJvf0iucXbdw1TDIcHUcPjD0",
  authDomain: "prazergaming.firebaseapp.com",
  projectId: "prazergaming",
  storageBucket: "prazergaming.appspot.com",
  messagingSenderId: "924156718681",
  appId: "1:924156718681:web:09971c371752b5887f0b48",
  measurementId: "G-0KT403M4VL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const storage = firebaseApp.storage();
