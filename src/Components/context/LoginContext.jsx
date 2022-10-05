
import {auth} from "../firebase/config.jsx"
import { createContext, useContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword,
          signInWithEmailAndPassword,
          signOut,
          onAuthStateChanged,
          sendPasswordResetEmail,
       } from "firebase/auth";


const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);

  //  if (!context) throw new Error("No hay usuario autenticado");
   return context;
};

export function LoginProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => signOut(auth);

  const resetPassword = async (email) => sendPasswordResetEmail(auth, email);


  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

    });
    return () => unsubuscribe();
  }, []);
 

  if (loading) return <h1>loading</h1>


  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        resetPassword,
  
      }}
    >
      {children}
    </authContext.Provider>
  );
}