/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/Firebase.init";
import useAxosPublic from "../Hooks/useAxosPublic";

const auth = getAuth(app);
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxosPublic()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    const updateUser = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {

            if (currentUser) {
                const email = currentUser.email;
                console.log('email', email);
                axiosPublic.post('/jwt', { email })
                    .then(res => {
                        if (res.data.token) {
                            setUser(currentUser);
                            localStorage.setItem("access-token", res.data.token)
                            setLoading(false)
                        }
                    })

            }
            else {
                localStorage.removeItem("access-token")
                setLoading(false)
            }

            console.log("current user ", currentUser);
        })
        return () => {
            return unsubcribe
        }
    }, [axiosPublic])
    const AuthInfo = {
        user,
        loading,
        creatUser,
        signIn,
        logOut,
        updateUser,
        googleLogin,

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;