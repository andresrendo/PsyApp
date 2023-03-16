import { onAuthStateChanged } from 'firebase/auth';
import React, {useContext, createContext, useEffect, useState} from 'react';
import { auth } from '../firebase/config';
import { getUserProfile } from '../firebase/users/user-service';

export const UserContext = createContext(null);

export function UserContextProvider({children}){
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, async (firebaseUser) => {
          setLoading(true);
          if (firebaseUser) {
            await getUserProfile(firebaseUser.email);
            setUser({
              id: firebaseUser.uid,
              name: firebaseUser.displayName,
              email: firebaseUser.email,
            });
          } else {
            setUser(null);
            setLoading(false);
          }
          setLoading(false);
        });
      }, []);

    return (<UserContext.Provider
        value={{user, isLoading, setLoading
        }}>
        {children}
        </UserContext.Provider>);
};

export function useUser(){
    return useContext(UserContext);
}
