import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Media from './routes/Media';
import Projects from './routes/Projects';


export function App() {

  return (
    <Router>
      <Suspense fallback={<div> Loading... </div> }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
