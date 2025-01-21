import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const UserHome = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>

            <h2 className="text-2xl">Welcome Back
                <span> 
                    {
                        user ? user?.displayName : "unKnown"
                    }
                </span>
            </h2>
        </div>
    );
};

export default UserHome;