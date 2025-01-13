import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import React, { createContext } from 'react';
import { auth } from '../Firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {



    // google register

    const googleRegister = () =>{
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    const userInfo = {
        name: 'omer',
        googleRegister,
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;