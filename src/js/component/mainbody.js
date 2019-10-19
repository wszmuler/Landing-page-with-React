import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Cards from "./cards";

class MainBody extends Component {
	render() {
		let cardsList = [
			{
				src: "http://placehold.it/500x325",
				title: "Card title 1",
				text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
				button: {
					href: "",
					title: ""
				}
			},
			{
				src: "http://placehold.it/500x325",
				title: "Card title 2",
				text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
			},
			{
				src: "http://placehold.it/500x325",
				title: "Card title 3",
				text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
			},
			{
				src: "http://placehold.it/500x325",
				title: "Card title 4",
				text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
			}
		];

		return (
			<div className="container">
				<Cards cardArray={cardsList} />
			</div>
		);
	}
}

export default MainBody;
