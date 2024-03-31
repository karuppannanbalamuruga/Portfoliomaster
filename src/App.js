
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Allpage from './components/Home';
import Project from './components/Project';
import AcademyBlog from './components/AcademyBlog';
import Conatct from './components/Contact';
import { ROUTES } from './components/const/routes';
import NotFound from './components/NotFound';
import './App.css';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path={ROUTES.DASHBOARD} element={<Allpage />} />
          <Route path={ROUTES.PROJECT} element={<Project />} />
          <Route path={ROUTES.ACADEMYBLOG} element={<AcademyBlog />} />
          <Route path={ROUTES.CONTACT} element={<Conatct />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
