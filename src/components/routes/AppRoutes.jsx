// src/routes.js
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Blog from '../../pages/Blog';
import BlogDetails from '../../pages/BlogDetails';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes> 
    );
};

export default AppRoutes;
