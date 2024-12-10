import { Navigate } from "react-router-dom";
import { useMemo } from "react";
import verifyToken from "../utils/verifyToken";

const ProtectedRoute = ({ children, requiredRole }) =>
{
    const token = localStorage.getItem("authToken");

    // Memoize user role computation only when token changes
    const userRole = useMemo(() =>
    {
        if (token)
        {
            try
            {
                const user = verifyToken(token);
                return user?.role;
            } catch (error)
            {
                console.error("Invalid token format:", error);
            }
        }
        return null;
    }, [ token ]);

    // Redirect to login if there's no token
    if (!token)
    {
        return <Navigate to="/login" replace />;
    }

    // Redirect if role does not match the requiredRole
    if (requiredRole && userRole !== requiredRole)
    {
        return <Navigate to="/not-authorized" replace />;
    }

    return children;
};

export default ProtectedRoute;
