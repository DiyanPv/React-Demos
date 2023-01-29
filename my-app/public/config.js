// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOqEHB-luJeb_0zW5EvVoap2OjRgFa0JM",
  authDomain: "expenses-track-react.firebaseapp.com",
  projectId: "expenses-track-react",
  storageBucket: "expenses-track-react.appspot.com",
  messagingSenderId: "725625761908",
  appId: "1:725625761908:web:fbfb906c89a0ab2128e121"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);