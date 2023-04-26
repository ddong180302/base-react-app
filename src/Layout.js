import App from './App';

import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import Admin from './components/Admin/Admin';
import User from './components/User/User';
import HomePage from './components/Home/HomePage';
import ManageUser from './components/Admin/Content/ManageUser';
import DashBoard from './components/Admin/Content/DashBoard';
import Login from './components/Auth/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = (props) => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />} >
                        <Route index element={<HomePage />} />
                        <Route path='users' element={<User />} />
                    </Route>
                    <Route path='/admins' element={<Admin />} >
                        <Route index element={<DashBoard />} />
                        <Route path='manage-users' element={<ManageUser />} />
                    </Route>
                    <Route path='/login' element={<Login />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
        </>
    )
}

export default Layout;