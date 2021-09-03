import React, { useState } from 'react';
import NavTabsDaDashboard from './NavTabsDashboard';
//added Page to Home import
import Home from './HomePage';
import ViewAllPosts from './pages/ViewAllPosts';
import ViewMyPosts from './pages/ViewAllPosts';
import Dashboard from './pages/Dashboard';
import CreatePost from './pages/CreatePost';


export default function DashboardContainer() {
  const [currentPage, setCurrentPage] = useState('Dashboard');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Dashboard') {
      return <Dashboard />;
    }
    if (currentPage === 'CreatePost') {
      return <CreatePost />;
    }
    if (currentPage === 'ViewAllPosts') {
      return <ViewAllPosts />;
    }
    if (currentPage === 'ViewMyPosts') {
      return <ViewMyPosts />;
    }
    if (currentPage === 'LogOut') {
      return <Home />;
    }
  }
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabsDaDashboard currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
