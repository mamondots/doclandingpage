import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const AuthProviders = ({children}) => {
    const [user,setUser] = useState()
    const [loader, setLoader] = useState(true)

    const createUser = (email,password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const singIn = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        setLoader(true)
        return signOut(auth)
    }

    const updateUserProfile = (name,photo) =>{
        return updateProfile(auth.currentUser,{
             displayName: name, photoURL : photo
         })
     }

    const googleSingIn = () =>{
        setLoader(true)
        return signInWithPopup(auth,provider)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            console.log(currentUser)
            setLoader(false)
        })
        return () =>{
            return unsubscribe()
        }
    },[])
    const authInfo = {
        user,
        loader,
        createUser,
        singIn,
        logOut,
        googleSingIn,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value ={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;