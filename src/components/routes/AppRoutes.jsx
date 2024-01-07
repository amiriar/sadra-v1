// src/routes.js
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Blog from '../../pages/Blog';
import BlogDetails from '../../pages/BlogDetails';
import Events from '../../pages/Events';
import StudentSuccess from '../../pages/StudentSuccess';
<<<<<<< HEAD
import EventDetail from '../../pages/EventDetail';
import StudentDetail from '../../pages/StudentDetail';
=======
import StudentDetail from '../../pages/StudentDetail';
import EventDetail from '../../pages/EventDetail';
>>>>>>> 10cb814bf0dfe4a8cf90eea19b5430415e5c52f9
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path='/event/:id' element={<EventDetail/>} />
            <Route path="/events" element={<Events />} />
            <Route path="/classes" element={<Home />} />
            <Route path="/contact" element={<Home />} />
            <Route path="/success" element={<StudentSuccess />} />
            <Route path="/student/:name" element={<StudentDetail />} />
        </Routes> 
    );
};

export default AppRoutes;
