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
    <div className="row perspective">
    <NavLink className="title mt-5" text="404" href="./"/>
    </div>
    </div>
    ) };
}