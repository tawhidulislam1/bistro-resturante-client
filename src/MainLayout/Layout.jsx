
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import NavBar from '../Pages/Shared/NavBar';

const Layout = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;