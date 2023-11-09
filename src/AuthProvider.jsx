import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase/Firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true)
    const [allService, setAllService] = useState([])
    const [filterService, setFilterService] = useState([])
    const [popularService, setPopularService] = useState([])
    const [otherService, setOtherService] = useState([])
    const [booking, setBooking] = useState([])
    const [search, setSearch] = useState()
    const  email = user ? user.email : null;

    useEffect(()=>{

      const observerRequest =  onAuthStateChanged(auth, (newUser)=>{
        setUser(newUser)
        setLoading(false)
      })
      return ()=> observerRequest()
    },[])
useEffect(()=>{
  axios.get('https://service-sharing-server-eight.vercel.app/service')
  .then(data =>{
    setAllService(data.data);
    const popular = data.data.slice(0, 4)
    setFilterService(data.data.slice(0, 6))
    setPopularService(popular)
    
  })
},[])
useEffect(()=> {

  axios.get(`https://service-sharing-server-eight.vercel.app/addedService?email=${email}`)
.then(res => 
  setOtherService(res.data))
  axios.get(`https://service-sharing-server-eight.vercel.app/order/${email}`)
  .then(res => setBooking(res.data))
},[email])



const buttonClicked = ()=> {
  return setFilterService(allService)
}
const handleSearch = (e)=>{
  e.preventDefault()
const text = e.target.text.value
const searchItem = allService.filter( item => item.serviceName.includes(text) )

setFilterService(searchItem);
}
    // Create User
    const createUser = (email, password) =>{
      setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password);

    }
    // Login
    const login = ( email, password)=>{
      setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Logout
    const logout =() =>{
      setLoading(true)
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
allService,
loading,
popularService,
buttonClicked,
filterService,
otherService,
booking,
handleSearch
    }

    return (
      <AuthContext.Provider value={authInfo}>
{children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;