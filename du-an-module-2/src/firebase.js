// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHWJFI_F7bi-V2avthYoOPATcbxH3FUfU",
    authDomain: "module2-img.firebaseapp.com",
    projectId: "module2-img",
    storageBucket: "module2-img.appspot.com",
    messagingSenderId: "467000826663",
    appId: "1:467000826663:web:552c1db27b4f8b33a9a702",
    measurementId: "G-P7R1HJ82DS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);