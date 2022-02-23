// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXcAH-7m0EaSNm-fSoH8MPCnoh84IstG0",
  authDomain: "walkthrough-97262.firebaseapp.com",
  projectId: "walkthrough-97262",
  storageBucket: "walkthrough-97262.appspot.com",
  messagingSenderId: "170441533094",
  appId: "1:170441533094:web:6d35bd645ca82380257667",
  measurementId: "G-HWL8JZ4B13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);
export default db;