import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // manage User OnAuthStateChange
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('currentUser :', currentUser)
            setLoading(false)
        });
        return () => {
            return unSubcribe()
        }
    }, [])

    // create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // signIn 
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };
    // googleSignIn
    const googleSignIn =()=>{
        return signInWithPopup(auth, googleProvider);
    }

    // LogOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // updateUserProfile
    const UpdateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo
        });
    };

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        UpdateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;