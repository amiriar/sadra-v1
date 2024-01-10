import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Blog from '../../pages/Blog';
import BlogDetails from '../../pages/BlogDetails';
import Events from '../../pages/Events';
import StudentSuccess from '../../pages/StudentSuccess';
import StudentDetail from '../../pages/StudentDetail';
import EventDetail from '../../pages/EventDetail';
import AdminDashboard from '../admin/AdminDashboard'
import Employment from '../../pages/Employment';
import AuthRegister from '../../pages/AuthRegister';
import AuthLogin from '../../pages/AuthLogin';
import Dashboard from '../dashboard/Dashboard';
const AppRoutes = () => {
    return (
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
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/employment" element={<Employment/>} />
            <Route path="/auth/register" element={<AuthRegister/>} />
            <Route path="/auth/login" element={<AuthLogin/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes> 
    );
};

export default AppRoutes;
