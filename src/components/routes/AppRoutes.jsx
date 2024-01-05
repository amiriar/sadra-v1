// src/routes.js
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Blog from '../../pages/Blog';
import BlogDetails from '../../pages/BlogDetails';
import Events from '../../pages/Events';
import StudentSuccess from '../../pages/StudentSuccess';
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/events" element={<Events />} />
            <Route path="/classes" element={<Home />} />
            <Route path="/contact" element={<Home />} />
            <Route path="/success" element={<StudentSuccess />} />
        </Routes> 
    );
};

export default AppRoutes;
