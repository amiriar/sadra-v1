import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Blog from '../../pages/Blog';
import BlogDetails from '../../pages/BlogDetails';
import Events from '../../pages/Events';
import StudentSuccess from '../../pages/StudentSuccess';
import StudentDetail from '../../pages/StudentDetail';
import EventDetail from '../../pages/EventDetail';
import AdminDashboard from '../dashboard/admin/AdminDashboard'
import Employment from '../../pages/Employment';
import AuthRegister from '../../pages/AuthRegister';
import AuthLogin from '../../pages/AuthLogin';
import DashboardHandler from '../dashboard/Dashboard';
import UserDashboard from '../dashboard/user/UserDashboard';
import TeacherDashboard from '../dashboard/teacher/TeacherDashboard';
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
            <Route path="/employment" element={<Employment/>} />
            <Route path="/auth/register" element={<AuthRegister/>} />
            <Route path="/auth/login" element={<AuthLogin/>} />
            <Route path="/dashboard" element={<DashboardHandler/>} />
            <Route path="/panel/user" element={<UserDashboard/>} />
            <Route path="/panel/teacher" element={<TeacherDashboard/>} />
            <Route path="/panel/admin" element={<AdminDashboard/>} />
        </Routes> 
    );
};

export default AppRoutes;
