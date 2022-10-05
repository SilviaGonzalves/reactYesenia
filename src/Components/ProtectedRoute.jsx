
  
  import { Navigate, Outlet } from "react-router-dom";
  import {useAuth}  from "./context/LoginContext.jsx";
  
  export function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();
  console.log("protectedRoutes   --  user")
  console.log(user)
    if (loading) return <h1>Loading</h1>;
  
    if (!user) return <Navigate to="/" />;
  
    // return <>{children}</>;
    return <Outlet />;
  }