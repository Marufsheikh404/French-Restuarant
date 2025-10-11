import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const [user,setUser]= useState([]);
    const [loading, setLoading] = useState(true);

    // manage User OnAuthStateChange
    useEffect(()=>{
      const unSubcribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log('currentUser :', currentUser)
            setLoading(false)
        });
        return ()=>{
            return unSubcribe()
        }
    },[])

    // create User
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    };

    // signIn 
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    };

    // LogOut
    const logOut = ()=>{
        return signOut(auht);
    }

    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;