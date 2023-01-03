import React, {Component} from 'react';
import PixelAsh from '../scripts/ThreeJS_KNAXELSBUNDLE2';
import Stats from 'stats-js'; 
import { GUI } from 'dat.gui';

class Scene extends Component {

    constructor() {
        super();
        this.canvasRef = React.createRef();
    }

    // ******************* COMPONENT LIFECYCLE ******************* //
    componentDidMount() {
        // this.stats = new Stats();
        // document.body.appendChild( this.stats.dom );

        
        const canvas = this.canvasRef.current;
        this.viewGL = new PixelAsh(canvas, this.stats);


        // Init any event listeners
        window.addEventListener('mousemove', this.mouseMove);
        window.addEventListener('resize', this.handleResize);



    }

    componentDidUpdate(prevProps, prevState) {
        // Pass updated props to 
        const newValue = this.props.whateverProperty;
        this.viewGL.updateValue(newValue);
    }

    componentWillUnmount() {
        // Remove any event listeners
        window.removeEventListener('mousemove', this.mouseMove);
        window.removeEventListener('resize', this.handleResize);
    }

    // ******************* EVENT LISTENERS ******************* //
    mouseMove = (event) => {
        this.viewGL.onPointerMove(event);
    }

    handleResize = () => {
        this.viewGL.onWindowResize(window.innerWidth, window.innerHeight);
    };

    render() {
        return (

            <div>

                <canvas ref={this.canvasRef} />
                
                  
            </div>

        );
    }
}
export default  Scene;