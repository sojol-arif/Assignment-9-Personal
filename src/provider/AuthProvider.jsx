import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { signOut } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth();

const AuthProvider = ({children}) => {       
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (updateProfileUser) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updateProfileUser);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(true);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, []);
    
    const authData = {
        user,
        loading,
        setUser,
        createUser,
        logOut,
        signIn,
        updateUserProfile
    }                                     
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;