import { useContext } from 'react';
import useAdmin from '../Hooks/useAdmin';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const [isAdminLoading, isAdmin] = useAdmin()
    const [user, loading] = useContext(AuthContext)
    const location = useLocation()
    if (loading || isAdminLoading) {
        return <><span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span></>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;