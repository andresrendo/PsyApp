import { onAuthStateChanged } from 'firebase/auth';
import React, {useContext, createContext, useEffect, useState} from 'react';
import { auth } from '../firebase/config';

export const UserContext = createContext({
    user:{
        name: null,
        email: null,
        age: null,
        },
        // favorites: [],
        // doctores: [],
        // pacientes: [],
});

export function UserContextProvider({children}){
    const [user, setUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                setUser({
                    id: firebaseUser.uid,
                    name: firebaseUser.displayName,
                    email: firebaseUser.email,
                });
            } else{
                setUser(null);
            }
        })
        
        },[]);

    return (<UserContext.Provider
        value={{user,
        }}>
        {children}
        </UserContext.Provider>);
};

export function useUser(){
    return useContext(UserContext);
}
