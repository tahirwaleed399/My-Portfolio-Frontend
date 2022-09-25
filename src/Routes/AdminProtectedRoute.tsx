import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AdminProtectedRoute({ children }:any) {
    const userState = useSelector((state:any)=>state.userState);
    if(userState.isAuthenticated === null ) return 'Loading...';

    return userState.isAuthenticated ? children : <Navigate to="/" />;
  }

  export default AdminProtectedRoute;