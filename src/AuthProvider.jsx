import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase/Firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true)
    const [allService, setAllService] = useState(null)
    console.log(allService);

    useEffect(()=>{

      const observerRequest =  onAuthStateChanged(auth, (newUser)=>{
        setUser(newUser)
      })
      return ()=> observerRequest()
    },[])
useEffect(()=>{
  axios.get('http://localhost:5000/service')
  .then(data =>{
    setAllService(data.data);
  })
},[])

    // Create User
    const createUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password);

    }
    // Login
    const login = ( email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Logout
    const logout =() =>{
        return signOut(auth)
    }
    // Update a user's profile

    const updateUser =(user, name, url)=>{
       return updateProfile(user, {
        displayName: name,
        photoURL: url,
       })
    }
    // Google sign in 

    const googleSingIn = ()=>{
        const googleProvider = new GoogleAuthProvider();
return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
createUser,
login,
user,
logout,
updateUser,
googleSingIn,
allService
    }

    return (
      <AuthContext.Provider value={authInfo}>
{children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;