import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1XMs_gjKjlgACRVBdMybQsq_7Kj186r4",
  authDomain: "ecommerce-b4596.firebaseapp.com",
  projectId: "ecommerce-b4596",
  storageBucket: "ecommerce-b4596.appspot.com",
  messagingSenderId: "834161571206",
  appId: "1:834161571206:web:96ec3c04fba735925f2807",
  measurementId: "G-5NSDZ00BQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore(app);