
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD2_Fx-vpoSgPqWjXyK1fU4u-5gKhxgLTg",
  authDomain: "react-netflix-clone-464ed.firebaseapp.com",
  projectId: "react-netflix-clone-464ed",
  storageBucket: "react-netflix-clone-464ed.appspot.com",
  messagingSenderId: "1033141386347",
  appId: "1:1033141386347:web:3151ff6c56dcd619f0452e",
  measurementId: "G-FFMF7V1BQN"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);