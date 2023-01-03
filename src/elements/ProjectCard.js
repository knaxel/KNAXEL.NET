import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ReactPlayer from 'react-player'

export default class ProjectCard extends Component {
  constructor(){
      super();
  }
  componentDidMount(){

  }
  render(){
    return (
      <div>
      <div className={`flip-card ${this.props.className}`} >
        <a  href={this.props.href}  className={`flip-card-inner`} >
          <div  className="flip-card-front" >
            <div className="media">
              <div> 
              <img src={this.props.src}/>
              </div>
              {/*<div className="shadow" ></div>*/}
            </div>

            <div  className={` glitch `} >
              <span  className="line ">{this.props.name}</span>
            </div> 
          </div>
          <div className="flip-card-back">
            
            <div  className={` glitch `} >
              <span className="line ">{this.props.name}</span>
            </div> 
            <div  className={` glitch `} >
              <span  className="line ">{this.props.name}</span>
            </div> 
          </div>
        </a>
      </div>
      </div>
      );
  }
}