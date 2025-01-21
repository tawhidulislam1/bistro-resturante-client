import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaCartPlus } from "react-icons/fa";
import useCarts from "../../Hooks/useCarts";
import useAdmin from "../../Hooks/useAdmin";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin()
    const [cart] = useCarts()
    console.log(cart);
    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "LogOut Successfully",
                    icon: "success",
                    draggable: true
                });
            })
            .catch(error => {
                console.log(error);
            })
    }
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/menu'}>Menu</NavLink></li>
        <li><NavLink to={'/order/pizza'}>Order</NavLink></li>
        {/* <li>
            <NavLink to={'/dashboard/cart'} className="btn">
                <FaCartPlus /> <div className="badge badge-neutral">+{cart.length}</div>
            </NavLink>
        </li> */}
        <li>
            {
                user && isAdmin && <NavLink to={'/dashboard/adminHome'}>Dashboard</NavLink>
            }
            {
                user && !isAdmin && <NavLink to={'/dashboard/userHome'}>Dashboard</NavLink>
            }
        </li>




    </>
    return (
        <nav>
            <div className="navbar fixed z-30 max-w-screen-xl mx-auto opacity-80 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <><button className="btn" onClick={handleLogout}>Logout</button></> : <><li><NavLink to={'/login'}>Login</NavLink></li></>
                    }
                    <NavLink to={'/dashboard/cart'} className="btn">
                        <FaCartPlus /> <div className="badge badge-neutral">+{cart.length}</div>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;