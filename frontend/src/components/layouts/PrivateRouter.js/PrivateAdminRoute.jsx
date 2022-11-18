import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../../firebase/AuthContext'
import axios from "axios"

export default function PrivateAdminRoute({ children }) {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState();

  useEffect(() => {
    axios
      .post(process.env.REACT_APP_LOCAL + "user", {
        user_email: currentUser.email.toLowerCase()
      })
      .then((res) => { setUserData(res.data.role); console.log(res.data.role) }) // console.log(res.data)
      .catch((err) => console.log(err));
  }, [currentUser.email]);

  if (userData !== "admin") {
    return <Navigate to='/' />
  }
  return children
}