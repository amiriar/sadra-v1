import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Blog from '../../pages/Blog';
import BlogDetails from '../../pages/BlogDetails';
import Events from '../../pages/Events';
import StudentSuccess from '../../pages/StudentSuccess';
import StudentDetail from '../../pages/StudentDetail';
import EventDetail from '../../pages/EventDetail';
import Employment from '../../pages/Employment';
import AuthRegister from '../../pages/AuthRegister';
import AuthLogin from '../../pages/AuthLogin';
import DashboardHandler from '../dashboard/Dashboard';
import DashInfo from '../dashboard/user/DashInfo';
import DashInfo2 from '../dashboard/user/DashInfos2';
import ScrollToTop from '../../helper/ScrollToTop';
import PersianNumbers from '../../helper/PersianNumbers';

const AppRoutes = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogDetails />} />
                <Route path="/events" element={<Events />} />
                <Route path='/events/:id' element={<EventDetail/>} />
                <Route path="/classes" element={<Home />} />
                <Route path="/contact" element={<Home />} />
                <Route path="/success" element={<StudentSuccess />} />
                <Route path="/student/:name" element={<StudentDetail />} />
                <Route path="/employment" element={<Employment/>} />
                <Route path="/auth/register" element={<AuthRegister/>} />
                <Route path="/auth/login" element={<AuthLogin/>} />
                <Route path="/dashboard" element={<DashboardHandler/>} />
                <Route path="/dashboard/infos" element={<DashInfo/>} />
                <Route path="/dashboard/infos/2" element={<DashInfo2/>} />
            </Routes> 
        </>
    );
};

export default AppRoutes;
