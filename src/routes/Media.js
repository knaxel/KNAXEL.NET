import React, {Component} from 'react';

import ReactPlayer from 'react-player'


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
    </div> )};
  }