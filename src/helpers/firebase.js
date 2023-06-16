// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRR9Jt_1h7pjh1xIkXddOC6CaQAO1xR0o",
  authDomain: "marketproductimages.firebaseapp.com",
  projectId: "marketproductimages",
  storageBucket: "marketproductimages.appspot.com",
  messagingSenderId: "736814304972",
  appId: "1:736814304972:web:3ba95c78eada013515fc69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage =getStorage(app)