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
      <NavLink text="KNAXEL.NET" className="row title pt-3  perspective-far  fly-in" href="#" />
      <div className="row  ">
        <NavCard text="MEDIA"  className="fly-in perspective" src="resources/gif/idk3.gif" href="./media"/>
        <NavCard text="PROJECTS"  className="fly-in perspective" src="resources/gif/idk2.gif"  href="/projects" />
        <NavCard text="ABOUT"  className="fly-in perspective" src="resources/gif/idk7.gif"  href="about" />
      </div>
    </div> )};
  }