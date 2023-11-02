import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdJOzmpqss8QiezhOB-7Le0H9UNL5b-kE",
  authDomain: "kupuka-4d17b2.firebaseapp.com",
  projectId: "kupuka-4d17b2",
  storageBucket: "kupuka-4d17b2.appspot.com",
  messagingSenderId: "336217283464",
  appId: "1:336217283464:web:7ea9897dec9d26b4fd783d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
