import type React from 'react';
import {Navigate, useLocation} from 'react-router'

const ProtectedRoutes = ({children}:{children:React.ReactNode}) => {
    const accessToken = localStorage.getItem('accessToken')
    const location = useLocation()
    if (!accessToken) return <Navigate to='/login' replace state={{from:location}} />
  return (
    children
  )
}

export default ProtectedRoutes