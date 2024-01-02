import React from 'react'

// Components & Pages
import Layout from './components/layouts/Layout'
import Home from './pages/Home'
import Blog from './pages/Blog'

const App = () => {
  return (
    <>
      <Layout>
            {/* <Home/> */}
            <Blog/>
      </Layout>
    </>
  )
}

export default App
