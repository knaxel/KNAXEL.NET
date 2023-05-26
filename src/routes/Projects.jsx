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
        name="Knaxel NET"
        intro="
          The same online ReactJS persona website that this project page is currently hosted on.
        "
        description="
          Goal of the project was practicing React again and having fun with WebGL. Pretty much everything about this website is completely customized. Some idea's are from starting places, but I have never seen them combined this way.
        "
        technologies={[
          "Javascript + ReactJS",
          "WebGL + Three.JS",
          "JQuery",
          "CSS3",
          "HTML5"
        ]}
        logo="resources/projects/knaxel.net/icon.png"
        images={[
          "resources/projects/knaxel.net/1.gif",
          "resources/projects/knaxel.net/2.gif",
          "resources/projects/knaxel.net/3.gif"
        ]}
        href="https://github.com/knaxel/knaxelnet"/>
        
        <ProjectCard 
        name="Climb Grader"
        intro="
          A web application connecting in-person climbing gym patrons. A working example of NodeJS being used for human computer interaction.
        "
        description="
          Imagine you own a rock climbing gym and you want to encourage your patrons to provide feedback on the climbing routes provided. Climb Grader allows you to put up simple QR-codes next to the climbing route as you normally would with difficulty ratings. These QR codes allow members to virtually review, grade, and ultimately providing you and your route setters valuable gym member feedback on the variety of climbing routes and opportunities in the gym.
        "
        technologies={[
          "JavaScript + Node.JS",
          "MongoDB",
          "HTML5",
          "CSS3 + skeleton.css"
        ]}
        logo="resources/projects/climb-grader/icon.png"
        images={[
          "resources/projects/climb-grader/1.png"
        ]}
        href="https://github.com/knaxel/Climb-Grader"/>

        <ProjectCard 
        name="Voxel Game Engine"
        intro="
          OpenGL Voxel game-engine typical optimizations.
        "
        description="
           Combines ECS principles with OOP ideas for a nice usage of the engine. Impliments greedy meshing optimization for vertice reduction. Each vertice has data compressed before saved to a VAO in OpenGL and rendered, reducing overall application memory usage. Two rendering pipelines, one is a mesh visualizer/shader. 
        "
        technologies={[
          "Java + LWJGL",
          "OpenGL/GLSL"
        ]}
        logo="resources/projects/voxelengine/icon.png"
        images={[
          "resources/projects/voxelengine/1.gif"
        ]}
        href="https://github.com/knaxel/knaxelnet"/>

        <ProjectCard 
        name="Dynamicode"
        intro="
          A online learning web application my friends and I developed over a summer at CU. Including a Python editor using Skult.
        "
        description="
          Users can create secure accounts and post code snippets of Python code. There are several learning Modules that the users can complete on their way to understanding more advanced programming topics.
        "
        technologies={[
          "Python + Flask",
          "Skulpt",
          "PostgreSQL",
          "CSS3 + Bootstrap",
          "HTML5",
          "Heroku"
        ]}
        logo="resources/projects/dynamicode/icon.png"
        images={[
        ]}
        href="https://github.com/knaxel/dynamicode"/>

        <ProjectCard 
        name="Jimmy's Maze"
        intro="
          Its a JavaScript game about being in a maze with back-end.
        "
        description="
           There are seven maze levels to complete and the user's score is determined by the time taken to complete the maze. The game includes a leaderboard, profile page, and user login and registration features.
        "
        technologies={[
          "PHP",
          "MySQL",
          "JavaScript + Phaser",
          "CSS3 + Bootstrap",
          "HTML5"
        ]}
        logo="resources/projects/jimmysmaze/icon.png"
        images={[
          "resources/projects/jimmysmaze/1.png",
          "resources/projects/jimmysmaze/4.png",
          "resources/projects/jimmysmaze/5.png"
        ]}
        href="https://github.com/knaxel/jimmysmaze"/>





      </div>

    </div> )};
  }