import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import { AuthContext } from '../Provider/AuthProvider';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext); // Destructure user and loading from AuthContext
    const [isAdmin, isAdminLoading] = useAdmin(); // Ensure order matches useAdmin's return values
    const location = useLocation();

    // Display loading spinner while data is being fetched
    if (loading || isAdminLoading) {
        return (
            <div className="loading-container">
                <span className="loading loading-ball loading-xs"></span>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
            </div>
        );
    }

    // Allow access if user is authenticated and an admin
    if (user && isAdmin) {
        return children;
    }

    // Redirect to login if not authenticated or not an admin
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
