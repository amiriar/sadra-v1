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
import Classes from '../../pages/Classes';
import ClassDetail from '../../pages/ClassDetail';
import ContactUs from '../../pages/ContactUs';
import BlogsList from '../dashboard/teacher/BlogsList';
import NewBlogDetails from '../../pages/NewBlogDetails';
import EventsList from '../dashboard/teacher/EventsList';
import ClassList from '../dashboard/teacher/ClassList';
import UsersList from '../dashboard/admin/UsersList';
import EditUser from '../dashboard/admin/EditUser';
import EmploymentList from '../dashboard/admin/EmploymentList';
import SuccessList from '../dashboard/admin/SuccessList';
import PageNotFound from '../../pages/404';
import Search from '../../pages/search';
const AppRoutes = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<NewBlogDetails />} />
                {/* <Route path="/blog/:id" element={<BlogDetails />} /> */}
                <Route path="/events" element={<Events />} />
                <Route path='/events/:id' element={<EventDetail/>} />
                <Route path="/classes" element={<Classes />} />
                <Route path="/classes/:id" element={<ClassDetail />} />
                <Route path="/success" element={<StudentSuccess />} />
                <Route path="/student/:name" element={<StudentDetail />} />
                <Route path="/employment" element={<Employment/>} />
                <Route path="/auth/register" element={<AuthRegister/>} />
                <Route path="/auth/login" element={<AuthLogin/>} />
                <Route path="/dashboard" element={<DashboardHandler/>} />
                <Route path="/dashboard/infos" element={<DashInfo/>} />
                <Route path="/dashboard/infos/2" element={<DashInfo2/>} />
                <Route path="/contact" element={<ContactUs/>} />
                <Route path="/dashboard/blogs" element={<BlogsList/>} />
                <Route path="/dashboard/events" element={<EventsList/>} />
                <Route path="/dashboard/classes" element={<ClassList/>} />
                <Route path="/search" element={<Search/>} />
                <Route path="/search/:query" element={<Search/>} />
                <Route path="/dashboard/users" element={<UsersList/>} />
                <Route path="/dashboard/users/:id" element={<EditUser/>} />
                <Route path="/dashboard/employment" element={<EmploymentList/>} />
                <Route path="/dashboard/student-success" element={<SuccessList/>} />
                <Route path='/*' element={<PageNotFound/>} />
            </Routes> 
        </>
    );
};

export default AppRoutes;
