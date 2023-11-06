import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from "../../store/authSlice"

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logoutHandler =()=>{
        authService.logout().then(()=>{
           dispatch({logout})
        })
    }
  return (
    <div>
     <button className='px-6 py-2 rounded-full' onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default LogoutBtn
