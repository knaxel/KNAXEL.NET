import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Media from './routes/Media';
import Projects from './routes/Projects';
import About from './routes/About';
import ListOThings from './routes/ListOThings';
import NotFound from './routes/404';


export function App() {

  return (
    <Router>
      <Suspense fallback={<div> Loading... </div> }>
        <Routes>
          <Route path="/*" element={<NotFound/>} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/media" element={<Media />} />
          <Route path="/about" element={<About />} />
          <Route path="/things_i_know" element={<ListOThings />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
