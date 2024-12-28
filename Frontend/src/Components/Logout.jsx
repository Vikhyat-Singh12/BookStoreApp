import React, { useContext } from 'react'
import Button from './Button'
import { Context } from '../App'
import toast from 'react-hot-toast';

const Logout = () => {
    const { setAuthUser, authUser } = useContext(Context);
    const handlelogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success("Logout Successfully")
            setTimeout(() => {
                window.location.reload();                        // to reload the page 
            },800)
        } catch (error) {
            toast.error("Error: "+error.message)
        }
    }
  return (
    <div onClick={handlelogout}>
      <Button btn="Logout"/>
    </div>
  )
}

export default Logout
