import React, {Component} from 'react';

import effect_perspective from '../scripts/effect_perspective';

import Scene from '../elements/Scene';
import NavCard from '../elements/NavCard';
import NavLink from '../elements/NavLink';

import '../root.scss';



export default class Home extends Component {

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
      <NavLink text="KNAXEL.NET" className="row title pt-3  perspective-far  fly-in-far" href="#" />
      <div className="row perspective ">
        <NavCard text="MEDIA"  href="media" className="fly-in" src="resources/gif/idk3.gif" href="./media"/>
        <div className="col "  >
          <NavCard text="EXPLORE"  className="fly-in" src="resources/gif/idk2.gif"  href="#" />
          <NavLink text="PROJECTS" className="fly-in" href="/projects" />
        </div>
        <NavCard text="ABOUT"  className="fly-in" src="resources/gif/idk7.gif"  href="about" />
      </div>
    </div> )};
  }