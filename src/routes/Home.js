import React, {Component} from 'react';

import Scene from '../Scene';
import NavCard from '../NavCard';
import NavLink from '../NavLink';
import '../root.css';

export default class Home extends Component {

  constructor(){
    super();

  }
    // ******************* COMPONENT LIFECYCLE ******************* //
    componentDidMount() {

    }
    render() { return (
    <div  id="perspective-container">
      <div className="row title  perspective-far">
          <NavLink text="KNAXEL.NET" className="" href="#" />
      </div>
      <div className="row">
        <NavCard text="MEDIA"  href="media" className="perspective" src="./idk3.gif"/>
          <div className="col"  >
            <NavCard text="EXPLORE"  className="perspective" src="./idk2.gif"/>
            <NavLink text="PROJECTS" className="perspective " href="#" />
          </div>
        <NavCard text="ABOUT"  className="perspective" src="./idk7.gif"/>
      </div>

      <Scene />
        
    </div> )};
  }