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
      <Link href={this.props.href} className="" >
        <div className="media">
            <div> 
            <img src={this.props.src}/>
            </div>
            {/*<div className="shadow" ></div>*/}
        </div>

        <div  className={` glitch ${this.props.className}`} >
                      <span className="line ">{this.props.text}</span>
                    </div> 
        </Link>
      </div>
      );
  }
}