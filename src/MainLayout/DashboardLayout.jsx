
import { FaAd, FaCalendar, FaHome, FaShoppingCart } from 'react-icons/fa';
import { FaBookBookmark } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-orange-400" >
                <ul className='menu'>
                    <li><NavLink to={'/dashboard/userHome'}><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to={'/dashboard/revulation'}><FaCalendar></FaCalendar> revulation</NavLink></li>
                    <li><NavLink to={'/dashboard/cart'}><FaShoppingCart></FaShoppingCart> Cart</NavLink></li>
                    <li><NavLink to={'/dashboard/review'}><FaAd></FaAd> Add a Review</NavLink></li>
                    <li><NavLink to={'/dashboard/bookings'}><FaBookBookmark></FaBookBookmark> My Bookings</NavLink></li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;