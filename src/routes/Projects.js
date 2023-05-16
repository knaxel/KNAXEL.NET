import React, {Component} from 'react';

import effect_perspective from '../scripts/effect_perspective';

import Scene from '../elements/Scene';
import NavLink from '../elements/NavLink';
import ProjectCard from '../elements/ProjectCard';

import '../root.scss';

export default class Projects extends Component {

  constructor(){
    super();

  }
    // ******************* COMPONENT LIFECYCLE ******************* //
    componentDidMount() {
        effect_perspective();

    }
    render() { return (
    <div  id="perspective-container" className="col ">
      <Scene/>
      <div className="col  fly-in ">
          <NavLink text="PROJECTS" className=" title  " href="#" />
          <NavLink text="← GO BACK ←" className="   " href="./" />
      </div>
      <div className="row">
        <ProjectCard 
        name="Climb Grader"
        text=""
        className="perspective fly-in" 
        src="resources/projects/climb.png"
        href="https://github.com/knaxel/"/>
        <ProjectCard 
        name="Voxel Game Engine"
        className="perspective fly-in" 
        src="resources/projects/voxel.png" 
        href="https://github.com/knaxel/Voxel-Chunk-Greedy-Meshing-Example-with-ECS" />
        <ProjectCard 
        name="Prodecural OpenGL"  
        className="perspective fly-in" 
        src="resources/projects/opengl.png"  
        href="https://github.com/knaxel/opengl_procedural_example" />
        <ProjectCard 
        name="Shoe-Leather"       
        className="perspective fly-in" 
        src="resources/projects/shoe-leather-256.png" 
        href="https://github.com/various-office-supplies/shoe-leather"/>
      </div>
      <div className="row">
        <ProjectCard href="https://github.com/knaxel/" 
        name="DynamiCode"         
        className="perspective fly-in" 
        src="resources/projects/dynamicode.png"/>
        <ProjectCard href="#" 
        name="N-Body Gravity Sim"        
        className="perspective fly-in" 
        src="resources/projects/n-body.png"/>
        <ProjectCard href="https://github.com/knaxel/" 
        name="Jimmys Maze"        
        className="perspective  fly-in" 
        src="resources/projects/JimmysMaze.png"/>
      </div>

    </div> )};
  }