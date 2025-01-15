import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading]= useState(true)

    // create user with email and pass
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // log in user 
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // sing out user based email and pass

    const logOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }


    // google register

    const googleRegister = () =>{
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const userInfo = {
        name: 'omer',
        googleRegister,
        createUser,
        loginUser,
        logOutUser,
        user,
        loading,
        logOutUser,

    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;