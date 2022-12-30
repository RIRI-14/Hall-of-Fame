import {useContext, createContext, useEffect, useState, useRef} from "react";
import { 
    GoogleAuthProvider, 
    signInWithPopup, 
    signInWithRedirect, 
    signOut, 
    onAuthStateChanged 
} from "firebase/auth";
import {auth} from '../firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    const [user, setUser] = useState({});

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();

        // console.log(windowSize.current[0]);
        if(windowSize.current[0] > 768){
            signInWithPopup(auth, provider);
            
        } else {
            signInWithRedirect(auth, provider);
        }
        // signInWithRedirect(auth, provider);
        
    };

    const logOut = () => {
        signOut(auth)
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('User', currentUser)
        });
        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <AuthContext.Provider value={{googleSignIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};