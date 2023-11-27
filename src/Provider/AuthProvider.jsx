import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
export const AuthContext = createContext();
const auth = getAuth(app)

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, SetUser ] = useState([])
    const [loading, setLoading] = useState(true)
    const axiosPublic = UseAxiosPublic()

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
            if (currentUser) {
                const loggedUser = {email: currentUser.email};
                axiosPublic.post('/jwt', loggedUser)
                .then(res => {
                    if (res.data.token) {
                        localStorage.setItem("access Token", res.data.token)
                        
                    }
                    // console.log('token response', res.data);
                })
            }
            else {
                localStorage.removeItem('access Token');

            }
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