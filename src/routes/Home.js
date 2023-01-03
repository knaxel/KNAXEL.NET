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
    <div  id="perspective-container">
      <NavLink text="KNAXEL.NET" className="row title perspective-far " href="#" />
      <div className="row perspective">
        <NavCard text="MEDIA"  href="media" className="" src="./idk3.gif" href="./media"/>
        <div className="col"  >
          <NavCard text="EXPLORE"  className="" src="./idk2.gif"  href="#" />
          <NavLink text="PROJECTS" className=" " href="./projects" />
        </div>
        <NavCard text="ABOUT"  className="" src="./idk7.gif"  href="#" />
      </div>
      <Scene/>
        
    </div> )};
  }