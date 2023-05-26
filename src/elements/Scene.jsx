import React, {Component} from 'react';
import { isMobile } from "react-device-detect";
import PixelAsh from '../scripts/ThreeJS_KNAXELSBUNDLE2';
import Stats from 'stats-js'; 
import { GUI } from 'dat.gui';

export default class Scene extends Component {

    constructor() {
        super();
        this.canvasRef = React.createRef();
    }


    // ******************* COMPONENT LIFECYCLE ******************* //
    componentDidMount() {
        // this.stats = new Stats();
        // document.body.appendChild( this.stats.dom );
        this.audio = new Audio("resources/music/main_theme_intro.mp3");
        this.playing = false;
        
        const canvas = this.canvasRef.current;
        this.viewGL = new PixelAsh(canvas, this.stats);

        // Init any event listeners
        if(!isMobile){
            window.addEventListener('mousemove', this.mouseMove);
        }
        window.addEventListener('resize', this.handleResize);



    }

    componentDidUpdate(prevProps, prevState) {
        // Pass updated props to 
        const newValue = this.props.whateverProperty;
        this.viewGL.updateValue(newValue);
    }

    componentWillUnmount() {

        if(!isMobile){
            window.removeEventListener('mousemove', this.mouseMove);
        }

        window.removeEventListener('resize', this.handleResize);
    }

    // ******************* EVENT LISTENERS ******************* //
    mouseMove = (event) => {
        this.viewGL.onPointerMove(event);
    }

    handleResize = () => {
        this.viewGL.onWindowResize(window.innerWidth, window.innerHeight);
    };
    toggle = () => {
      if(this.playing){
        this.audio.pause();
        this.playing = false;
        document.getElementById('un-mute-button').innerHTML = "🔊UNMUTE🔊";
      }else{
        this.audio.play();
        this.playing = true;
        document.getElementById('un-mute-button').innerHTML = "🔇MUTE🔇";
      }
    }
    render() {
        return (

            <div>

                <canvas ref={this.canvasRef} />
                
                <div className="audio">
                    <button onClick={this.toggle} id="un-mute-button" className="glitch ">🔊UNMUTE🔊</button>
                </div>
                  
            </div>

        );
    }
}