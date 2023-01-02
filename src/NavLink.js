import React, {Component} from 'react';

export default class NavLink extends Component {

	constructor(){
		super();

	}
    // ******************* COMPONENT LIFECYCLE ******************* //
    componentDidMount() {

    }
    render() {
    	return ( <div className={`navlink `} > <a href={this.props.href} className={` glitch  ${this.props.className}`} >
                      <span className="line ">{this.props.text}</span>
                    </a></div>);

    }
}