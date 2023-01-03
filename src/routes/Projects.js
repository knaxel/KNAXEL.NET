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
    <div  id="perspective-container">
      <div className="col perspective">
          <NavLink text="PROJECTS" className=" title  " href="#" />
          <NavLink text="← GO BACK ←" className="   " href="./" />
      </div>

      <div className="row ">
        <ProjectCard href="#" name="Climb Grader"       className="perspective" src="./climb.png"/>
        <ProjectCard href="#" name="Voxel Game Engine"  className="perspective" src="./voxel.png"/>
        <ProjectCard href="#" name="Shoe-Leather"       className="perspective" src="./shoe-leather-256.png"/>
        <ProjectCard href="#" name="DynamiCode"         className="perspective" src="./dynamicode.png"/>
        <ProjectCard href="#" name="Prodecural OpenGL"  className="perspective" src="./opengl.png"/>
        <ProjectCard href="#" name="Gravity Sim"        className="perspective" src="./idk8.gif"/>
        <ProjectCard href="#" name="Jimmys Maze"        className="perspective" src="./idk9.gif"/>
      </div>

      <Scene/>
      <NavLink text="← GO BACK ←" className="" href="./" />
    </div> )};
  }