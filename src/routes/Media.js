import React, {Component} from 'react';

import ReactPlayer from 'react-player'

import Scene from '../Scene';
import NavCard from '../NavCard';
import NavLink from '../NavLink';
import '../root.css';

export default class Media extends Component {

  constructor(){
    super();

  }
    // ******************* COMPONENT LIFECYCLE ******************* //
    componentDidMount() {

    }
    render() { return (
    <div  id="">
    <ReactPlayer url='./240.mp4' playing={true}  />
            <NavCard text="EXPLORE"  className="" src="./idk2.gif"/>
      <Scene />
        
    </div> )};
  }