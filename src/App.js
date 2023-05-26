import React, { Suspense } from 'react';
import { BrowserRouter , Routes, Route, useSearchParams } from 'react-router-dom';

import Home from './routes/Home';
import Media from './routes/Media';
import Projects from './routes/Projects';
import About from './routes/About';
import ListOThings from './routes/ListOThings';
import NotFound from './routes/404';




export default function App(){
    const ProjectsLocation = props =>{
      const params = useSearchParams()[0].get("returnURL");
    
    return (<Projects returnURL={params}/>);
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<div> Loading... </div> }>
        <Routes>
          <Route path="/*" element={<NotFound/>} ></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<ProjectsLocation/>}></Route>
          <Route path="/media" element={<Media />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/things_i_know" component={<ListOThings />} ></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}