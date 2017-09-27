import React, { Component } from 'react';
import {Link} from 'react-router';
import Filter from './Filter';

export default class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  		url : ""
  	}
  	this.updateurl = this.updateurl.bind(this);
  }

  updateurl(e) {
  	this.setState({
  		url : e.target.value
  	})
  }

  render() {
  	console.log(this.state.url);
    return (
      // Add your component markup and other subcomponent references here.
      <div>
      	<h1>Enter the Url:</h1>
      	<input type="text" onChange={this.updateurl}/>
      	<Link to={{pathname: "/filter", query: this.state}}><p>Aplly Filter!!</p></Link>
      </div>	
    );
  }
}
