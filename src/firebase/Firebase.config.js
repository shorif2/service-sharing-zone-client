// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log('inside fire' import.meta.env.PASS);
const firebaseConfig = {
  apiKey: "AIzaSyBBEEPAbWPyofzJRywUEuEpcu2Akokf0qI",
  authDomain: "service-sharing-client.firebaseapp.com",
  projectId: "service-sharing-client",
  storageBucket: "service-sharing-client.appspot.com",
  messagingSenderId: "850841988249",
  appId: "1:850841988249:web:4353b64d32f3f893189c08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth