import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import Sidebar from './Sidebar';
import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <Router>
      <Sidebar />
    </Router>
  );
};

export default App;