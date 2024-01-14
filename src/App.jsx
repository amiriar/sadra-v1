import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import AppRoutes from './components/routes/AppRoutes';

// react-query
import { QueryClient , QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient} >
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
    </QueryClientProvider>
  );
};

export default App;