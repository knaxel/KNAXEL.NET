import React, {Component} from 'react';



import '../root.scss';

export default class Home extends Component {

  constructor(){
    super();

  }
  // ******************* COMPONENT LIFECYCLE ******************* //
  componentDidMount() {

  }
  render() { return (
    <div className=" ">
      <h1> Things Emerson Knows </h1>

      <b>Languages: </b> <br/>
      Java, <br/>
      JavaScript, <br/>
      C / C++, <br/>
      C#, <br/>
      Rust, <br/>
      Python, <br/>
      PHP, <br/>
      Scala, <br/>
      Lua, <br/>
      HTML / CSS / JS, <br/> <br/>

      
      <b>Frameworks:</b> <br/>         
      NodeJS / NPM, <br/>
      ExpressJS, <br/>
      HandlebarsJS, <br/>
      Django, <br/>
      Flask, <br/>
      Bootstrap, <br/> <br/>

      <b>DataBase:</b> <br/>    
      MongoDB, <br/>
      Firebase, <br/>
      MySQL, <br/>
      PostgreSQL, <br/> <br/>

      <b>Graphics:</b> <br/>    
      OpenGL, <br/>
      WebGL, <br/>
      GLSL Shaders, <br/> <br/>

      <b>Computer Literacy:</b> <br/>    
      Adobe Suite, <br/>
      IOS / ANDROID app development. <br/>
      REST API, <br/>
      Bash / CMD, <br/>
      Linux / Windows / MacOS, <br/> <br/>

    </div>
    ) };
}