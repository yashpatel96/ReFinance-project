import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../../firebase/AuthContext'

export default function NotUser({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to='/' />
  }

  return children
}