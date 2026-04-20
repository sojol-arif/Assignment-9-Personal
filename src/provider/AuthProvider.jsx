import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { signOut } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth();

const AuthProvider = ({children}) => {       
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        }
    }, []);
    
    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn
    }                                     
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;