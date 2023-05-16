import React, {Component} from 'react';

export default class NavLink extends Component {

	constructor(){
		super();

	}
    // ******************* COMPONENT LIFECYCLE ******************* //
    componentDidMount() {

    }
    render() {
    	return ( <div className={`navlink ${this.props.className}`} >
                  <a href={this.props.href} className={` glitch  `} >
                      <span className="line ">{this.props.text}</span>
                  </a>
                </div>);

    }
}