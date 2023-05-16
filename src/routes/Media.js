import React, {Component} from 'react';

import ReactPlayer from 'react-player'

import '../root.scss';

export default class Media extends Component {

    constructor(){
      super();

    }
    // ******************* COMPONENT LIFECYCLE ******************* //
    componentDidMount() {

      let audio = new Audio("resources/music/main_theme_intro.mp3");

      audio.play().catch((error) => {
        this.error=true;
        document.addEventListener('click', () => {
          audio.play()
        }, { once: true } )
      });

    }
    render() { return (
        <div className="background-video">
           <a href="./" >
            <ReactPlayer url='resources/media.mp4'  playing loop muted 
              playsinline 
              webkit-playsinline 
              type='video/mp4'
              controls={false}/>

            <h3 className="row">COMING SOON...</h3>
          </a>
        </div>
    )};
  }