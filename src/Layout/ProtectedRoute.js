
import { Navigate } from "react-router-dom";
import verifyToken from "../utils/verifyToken";

const ProtectedRoute = ({ children, requiredRole }) =>
{
    const token = localStorage.getItem('authToken');
    let userRole;
    if (token)
    {
        try
        {
            const user = verifyToken(token)
            userRole = user.role
        } catch (error)
        {
            console.error('Invalid token format:', error);
        }
    }

    // Redirect to login if there's no token
    if (!token)
    {
        return <Navigate to="/login" replace={true} />;
    }

    // Check for admin access if a specific role is required
    if (requiredRole && userRole !== requiredRole)
    {
        return <Navigate to="/not-authorized" replace={true} />; // Redirect to an unauthorized page if needed
    }
    return children;
};

export default ProtectedRoute;
