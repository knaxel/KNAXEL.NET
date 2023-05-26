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

    }
    render() { return (
    <div  id="" className="col ">
      <Scene/>
      <div className="col  fly-in ">
          <NavLink text="PROJECTS" className=" title  " href="#" />
          <NavLink text="← GO BACK ←" className="   " href="http://localhost:3000/" />
      </div>
      <div id="projects" className="col">

        <p className="text-center fly-in">
          A list of all the software development projects I have worked on. Some are completely my own, some with friends/group members. All the projects Listed are available on <a href="https://www.github.com/knaxel">Github</a>.
        </p>
        <ProjectCard 
        name="Climb Grader"
        description="tesfadsfasdghfd sgdfste sfadsfasdghfdsgdfsfd safsdf sdafasgdfsg tesfadsfasdgh fdsgdfsfdsafs dfsdafasg dfsgtesfads fasdghfdsgdfsfds afsdf dafasgdfsg
        "
        technologies={[
          "Node.JS",
          "MongoDB",
          "HTML5",
          "CSS3"
        ]}
        logo="resources/projects/climb.png"
        images={[
          "resources/projects/climb.png",
          "resources/projects/climb.png"
        ]}
        href="https://github.com/knaxel/"/>

        <ProjectCard 
        name="Climb-Grader2"
        description="
        
        "
        technologies={[
          "Node.JS",
          "MongoDB",
          "HTML5",
          "CSS3"
        ]}
        images={[
          "resources/projects/climb.png",
          "resources/projects/climb.png"
        ]}
        
        src="resources/projects/climb.png"
        href="https://github.com/knaxel/"/>
        <ProjectCard 
        name="Climb-Grader3"
        description="
        
        "
        technologies={[
          "Node.JS",
          "MongoDB",
          "HTML5",
          "CSS3",
          "MongoDB",
          "HTML5",
          "MongoDB",
          "HTML5",
          "MongoDB",
          "HTML5",
          "CSS3"
        ]}
        images={[
          "resources/projects/climb.png",
          "resources/projects/climb.png"
        ]}
        
        src="resources/projects/climb.png"
        href="https://github.com/knaxel/"/>        <ProjectCard 
        name="Climb-Grader4"
        description="
        
        "
        technologies={[
          "Node.JS",
          "MongoDB",
          "HTML5",
          "CSS3"
        ]}
        images={[
          "resources/projects/climb.png",
          "resources/projects/climb.png"
        ]}
        
        src="resources/projects/climb.png"
        href="https://github.com/knaxel/"/>        <ProjectCard 
        name="Climb-Grader5"
        description="
        
        "
        technologies={[
          "Node.JS",
          "MongoDB",
          "HTML5",
          "CSS3"
        ]}
        images={[
          "resources/projects/climb.png",
          "resources/projects/climb.png"
        ]}
        
        src="resources/projects/climb.png"
        href="https://github.com/knaxel/"/>        <ProjectCard 
        name="Climb-Grader6"
        description="
        
        "
        technologies={[
          "Node.JS",
          "MongoDB",
          "HTML5",
          "CSS3"
        ]}
        images={[
          "resources/projects/climb.png",
          "resources/projects/climb.png"
        ]}
        
        src="resources/projects/climb.png"
        href="https://github.com/knaxel/"/>

      </div>

    </div> )};
  }