import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);


const Authprovider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);


    // create user by email and password 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    // update User Data
    const updateUser = (profile) => {

        return updateProfile(auth.currentUser, profile)

        // return updateProfile(auth.currentUser, profile)
    }

    // signOut

    const logOut = () => {
        setLoading(true)
        return signOut(auth)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()

    }, [])



    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        setUser,
        logOut,
        updateUser

    }


    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;