import React, {Component} from 'react';

import effect_perspective from '../scripts/effect_perspective';
import effect_cube from '../scripts/effect_cube';

import Scene from '../elements/Scene';
import NavLink from '../elements/NavLink';

import '../root.scss';

export default class Home extends Component {

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
          <label for="rad5"> Audio</label>

          <input id="rad6" type="radio" name="rotate-cube-side" value="bottom" />
          <label for="rad6"> Story</label>
        </div>
      </div>

      <div className="row fly-in" >
        <div className="scene perspective" >
          <div className="cube ">
            <div className="cube__face cube__face--front">
              <h3>WELCOME</h3>
              <p>
                I am KNAXEL and I am a digital creator. 
                <br></br>
                Key skills I have are Software Engineering, Multimedia Production, and Design
                <br></br>
                Click on the labels above to rotate the cube and read more.
              </p>
              <img src="resources/gif/cube_hello.gif"/>
            </div>
            <div className="cube__face cube__face--right">
              <img src="resources/gif/cube_photography.gif"/>
              <p>
                I am a Bachelor of Computer Science with a minor in Mathematics.
              </p>
              </div>
            <div className="cube__face cube__face--left">
              <img src="resources/gif/cube_photography.gif"/>
              <p>
                Almost all my projects, or anything under my name, was either entirely or partially designed by me. I have grown up designing my own logos, websites, products, and more for various projects. 
              </p>
              </div>
            <div className="cube__face cube__face--back">
              <img src="resources/gif/cube_code.gif"/>
              <p>
                I crossed over from a purely digital medium more recently into general multimedia production though, I've always had a passion for framing.
              </p>
              </div>
            <div className="cube__face cube__face--top">
              <img src="resources/gif/cube_music.gif"/>
              <p>
                Much alike my design experienced, I've grown equiped with experience in audio engineering and music production. This website has a tune you can start playing from the bottom of your screen.
              </p>
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