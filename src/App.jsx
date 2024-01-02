// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import AppRoutes from './components/routes/AppRoutes';

const App = () => {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
};

export default App;
