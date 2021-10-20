import firebaseInitialize from "../Firebase/Firebase.init";
import {getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut ,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useState,useEffect } from "react";



firebaseInitialize()


const UseFirebase=()=>{
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");


    const userRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            const errorMessage = error.message;
          });
      };

      const userLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            const errorMessage = error.message;
          });
      };




    const loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
          .then((result) => setUser(result.user))
          .catch((error) => setError(error.message));
      };
      useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
          } else {
            setError("");
          }
        });
      }, []);

      const handleLogout = () => {
        signOut(auth)
          .then(() => {
            setUser({});
          })
          .catch((error) => {
            setError("");
          });
      };

      return { loginWithGoogle, user, error, handleLogout,userLogin,userRegister};
}
export default UseFirebase;