import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, signOut , onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/firebase/initializeFirebase";


const useFireBase = () => {
    //init firebase app
    initializeFirebase();
    const auth = getAuth();


    const [user, setUser] = useState({})

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                setUser(user)

            })

    }

    const registerWithEmailPass = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }

    // log out

    const logOut = () => {
        signOut(auth).then(() => {
             setUser({})
          }).catch((error) => {
            
          });

    }

    // onAuthStateChange here unsubscribe 

    useEffect(()=> {
       const unSubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
               setUser(user)
             
            } else {
              setUser({})
            }
          });

          return ()=> unSubscribe
          

    },[])

    


    return {
        user, signInWithGoogle, registerWithEmailPass, logOut
    }

}

export default useFireBase
