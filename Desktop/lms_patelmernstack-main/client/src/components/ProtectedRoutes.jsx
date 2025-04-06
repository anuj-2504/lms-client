import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const authState = useSelector(store => store.auth);
    
    console.log("🔍 ProtectedRoute Debug:", authState); // Debugging
    
    if (!authState.isAuthenticated) {
        console.log("❌ Not authenticated, redirecting to login.");
        return <Navigate to="/login" />;
    }

    return children;
};

export const AuthenticatedUser = ({ children }) => {
    const authState = useSelector(store => store.auth);
    
    console.log("🔍 AuthenticatedUser Debug:", authState); // Debugging
    
    if (authState.isAuthenticated) {
        console.log("✅ Already authenticated, redirecting to home.");
        return <Navigate to="/" />;
    }

    return children;
};

// ✅ Fixed: Now properly checks for admin role without breaking other pages
export const AdminRoute = ({ children }) => {
    const authState = useSelector(store => store.auth);

    console.log("🔍 Redux State in AdminRoute:", authState);

    if (!authState.isAuthenticated) {
        console.warn("🔴 Not Authenticated - Redirecting to Login");
        return <Navigate to="/login" />;
    }

    if (!authState.user || authState.user.role !== "admin") {
        console.warn("⚠️ Access Denied! User is not admin:", authState.user);
        return <Navigate to="/" />;
    }

    return children;
};