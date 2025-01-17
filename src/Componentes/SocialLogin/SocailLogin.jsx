import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxosPublic from "../../Hooks/useAxosPublic";


const SocailLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublic = useAxosPublic()
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/user', userInfo)
                    .then(() => {
                        Swal.fire("Account Create Succesfully!");
                        navigate('/');
                    })
            })
    }
    return (
        <div>
            <div>
                <div className="divider"></div>
                <button onClick={handleGoogleLogin} className="btn btn-neutral w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
            </div>

        </div>
    );
};

export default SocailLogin;