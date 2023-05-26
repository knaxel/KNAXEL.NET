import React, {Component} from 'react';

import effect_perspective from '../scripts/effect_perspective';
import effect_cube from '../scripts/effect_cube';

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
    effect_cube();
    effect_perspective();

  }
  render() { return (
    <div  id="perspective-container" class="col ">
      <Scene/>
      <div className="col perspective fly-in">
        <NavLink className="title" text="ABOUT" href=""/>
        <NavLink className="" text="← GO BACK ←" href="./" />
      </div>
      <div className="row mt-1 fly-in">
        <div className="radio-group">
          <input id="rad1" type="radio" name="rotate-cube-side" value="front" defaultChecked />
          <label for="rad1"> Hello</label>
          
          <input id="rad2" type="radio" name="rotate-cube-side" value="right" />
          <label for="rad2" >Software</label>
          
          <input id="rad3" type="radio" name="rotate-cube-side" value="left" /> 
          <label for="rad3"> Design </label>
          
          <input id="rad4" type="radio" name="rotate-cube-side" value="back" /> 
          <label for="rad4" >Photo</label>

          <input id="rad5" type="radio" name="rotate-cube-side" value="top" /> 
          <label for="rad5"> Music</label>

          <input id="rad6" type="radio" name="rotate-cube-side" value="bottom" />
          <label for="rad6"> Story</label>
        </div>
      </div>

      <div className="row fly-in" >
        <div className="scene perspective" >
          <div className="cube ">
            <div className="cube__face cube__face--front">
              <h3>HELLO</h3>
              <p>
                I am KNAXEL. Click on labels above to rotate the cube.
              </p>
              <img src="resources/gif/cube_hello.gif"/>
            </div>
            <div className="cube__face cube__face--right">
              <img src="resources/gif/cube_code.gif"/>
              </div>
            <div className="cube__face cube__face--left">
              <img src="resources/gif/cube_code.gif"/>
              </div>
            <div className="cube__face cube__face--back">
              <img src="resources/gif/cube_photography.gif"/>
              </div>
            <div className="cube__face cube__face--top">
              <img src="resources/gif/cube_music.gif"/>
              </div>
            <div className="cube__face cube__face--bottom">
              <img src="resources/gif/cube_story.gif"/>
              </div>
          </div>
        </div>
      </div>



    </div>
    ) };
}