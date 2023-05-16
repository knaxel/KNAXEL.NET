import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ReactPlayer from 'react-player'

export default class NavCard extends Component {
  constructor(){
      super();
  }
  componentDidMount(){

  }
  render(){
    return (
      <div className={`card  ${this.props.className}`} >
      <a href={this.props.href} className="" >
        <div className="media">
            <div> 
            <img src={this.props.src}/>
            </div>
        </div>

        <div  className={` glitch `} >
                      <span className="line ">{this.props.text}</span>
                    </div> 
        </a>
      </div>
      );
  }
}