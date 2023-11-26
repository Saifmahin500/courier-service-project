import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app)

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, SetUser ] = useState([])
    const [loading, setLoading] = useState(true)

    const GoogleSignIn = () => {
        return signInWithPopup(auth,GoogleProvider)
    }
    const CreateUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        return signOut(auth);

    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
             SetUser(currentUser);
             console.log("currentUser" , currentUser);
             setLoading(false)
         })
         return () => {
             return unsubscribe();
         }
     },[])



    const authInfo = { user,GoogleSignIn,CreateUser,signIn,logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;