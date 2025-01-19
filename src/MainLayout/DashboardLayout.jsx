
import { FaAd, FaBook, FaCalendar, FaHome, FaListUl, FaPaypal, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa';
import { FaBookBookmark } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const DashboardLayout = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-orange-400" >
                <ul className='menu'>
                    {
                        isAdmin ? <>
                            <li><NavLink to={'/dashboard/adminHome'}><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to={'/dashboard/addItems'}><FaUtensils></FaUtensils> Add Items</NavLink></li>
                            <li><NavLink to={'/dashboard/manageItems'}><FaListUl /> Manage Item</NavLink></li>
                            <li><NavLink to={'/dashboard/bookings'}><FaBook></FaBook> Manage Book</NavLink></li>
                            <li><NavLink to={'/dashboard/users'}><FaUsers></FaUsers> All Users</NavLink></li>
                        </>
                            :
                            <>
                                <li><NavLink to={'/dashboard/userHome'}><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to={'/dashboard/revulation'}><FaCalendar></FaCalendar> revulation</NavLink></li>
                                <li><NavLink to={'/dashboard/revulation'}><FaPaypal></FaPaypal> Payment history</NavLink></li>
                                <li><NavLink to={'/dashboard/cart'}><FaShoppingCart></FaShoppingCart> Cart</NavLink></li>
                                <li><NavLink to={'/dashboard/review'}><FaAd></FaAd> Add a Review</NavLink></li>
                                <li><NavLink to={'/dashboard/bookings'}><FaBookBookmark></FaBookBookmark> My Bookings</NavLink></li>
                            </>
                    }
                    <div className="divider"></div>

                    {/* home page redirect the file  */}
                    <li><NavLink to={'/'}><FaHome></FaHome>  Home</NavLink></li>
                    <li><NavLink to={'/menu'}><FaCalendar></FaCalendar> menu</NavLink></li>
                    <li><NavLink to={'/Shop'}><FaShoppingCart></FaShoppingCart> Shop</NavLink></li>
                    <li><NavLink to={'/dashboard/review'}><FaAd></FaAd> Contact</NavLink></li>

                </ul>
            </div>
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;