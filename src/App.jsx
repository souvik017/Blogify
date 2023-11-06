import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import {login, logout} from "./store/authSlice"
import Header from "./commponents/Header/Header";
import Footer from "./commponents/Footer/Footer";
import { Outlet } from "react-router-dom";



function App() {
  const [loading, setLoading] = useState(true);
const dispatch = useDispatch();

useEffect(() => {
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(login({userData}))
    }else{
      dispatch(logout())
    }
  })
  .catch((error)=>{
    console.log("error in app jsx get user: ", error)
  })
  .finally(()=>setLoading(false))
}, )


  return !loading ?(
  <div className="w-screen mx-auto text-center">
    <div>
      <Header/>
      <main>
      <Outlet/>
      </main>
      <Footer/>
    </div>
  </div>
  ):null
    
  
}

export default App;