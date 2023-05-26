import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class ProjectCard extends Component {
  constructor(){
      super();

  }
  componentDidMount(){

  }
  render(){
    return (
      <div className="row project  fly-in"  >
            <img className="logo" src={this.props.logo} />
            <div className="col project_main">
              <h2>{this.props.name}</h2>
              <hr></hr>
              <div className="col  ">
                  <input type="checkbox" name="collapse" id={"description" + this.props.name.replace(/\s/g, '') }  />
                  <h4>Description</h4>
                  <label htmlFor={"description" + this.props.name.replace(/\s/g, '')} className="close"> </label>
                  <p>
                    {this.props.description} 
                  </p>
              </div>

              <div className="col images">
                  <input type="checkbox" name="collapse" id={"images" + this.props.name.replace(/\s/g, '')}  />
                  <h4>Images</h4>
                  <label htmlFor={"images" + this.props.name.replace(/\s/g, '')} className="close"> </label>
                  <ul class="col">
                    {this.props.images.map((image, i) => { 
                          return ( <img src={image} /> ) 
                    })}
                    </ul>
              </div>
            </div>
              <div className="col ">
                <h4>Technologies</h4>
                <input type="checkbox" name="collapse" id={"technology" + this.props.name.replace(/\s/g, '')}  />
                  <label htmlFor={"technology" + this.props.name.replace(/\s/g, '')} className="close"> </label>
                <ul>
                    {this.props.technologies.map((technology, i) => { 
                          return ( <li>{technology}</li> ) 
                    })}
                </ul>

                <a className="github-link" href={this.props.href}>
                    <i className="fab fa-github github-icon"></i> GitHub
                </a>
            </div>
      </div>
      );
  }
}