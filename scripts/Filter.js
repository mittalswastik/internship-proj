import React, { Component } from 'react';

export default class Filter extends Component {
	constructor(props){
		super(props);
	}

	render() {

		console.log(this.props.location.query.url);

		return (
			<div>
				<h1> hello </h1>
			</div>
		);
	}
}