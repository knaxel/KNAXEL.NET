import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Media from './routes/Media';


export function App() {

  return (
    <Router>
      <Suspense fallback={<div> Loading... </div> }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
