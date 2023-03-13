import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
   apiKey: "AIzaSyAF5TyoMTHWeUpo5qu2R_J4OFJS_5nlIqE",
   authDomain: "gpt-assistant-24ed3.firebaseapp.com",
   projectId: "gpt-assistant-24ed3",
   storageBucket: "gpt-assistant-24ed3.appspot.com",
   messagingSenderId: "174943254159",
   appId: "1:174943254159:web:96dfafac9b0aaf7f3e62fa"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage();