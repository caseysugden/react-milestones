import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9MxmtIkLzP3UEgiShcG92JYgARRPHU2Q",
    authDomain: "react-milestones.firebaseapp.com",
    projectId: "react-milestones",
    storageBucket: "react-milestones.appspot.com",
    messagingSenderId: "869271795154",
    appId: "1:869271795154:web:8bac0c993000b29f27440b",
    measurementId: "G-MWB8ZPWVJ8"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };

