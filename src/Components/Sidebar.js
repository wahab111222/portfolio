import React from 'react';
import { Link, useRoutes } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => (
  <div>
    <h2>Home</h2>
    <h4>Welcome To My Home Page</h4>
    
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <h4> Welcome To My  About</h4>
    

  </div>
);

const Projects = () => (
  <div>
    <h2>Projects</h2>
    <h4>Welcome To My  Projects</h4>
    
  </div>
);

const routes = [
  { path: '/', element: <Home /> },
  { path: 'about', element: <About /> },
  { path: 'projects', element: <Projects /> },
];

const Sidebar = () => {
  const element = useRoutes(routes);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ width: '200px', background: '#f0f0f0', padding: '20px' }}>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="projects">Projects</Link>
        </div>
        <div style={{ flex: 1, padding: '20px' }}>{element}</div>
      </div>
    </div>
  );
};

export default Sidebar;