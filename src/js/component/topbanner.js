import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

export class TopBanner extends React.Component {
	render() {
		return (
			<div>
				<Jumbotron className="">
					<h1 className="display-3">A Warm Welcome!</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt
						possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat
						numquam repellat.
					</p>
					<p>
						<Button className="btn-lg" variant="primary">
							Call to action!
						</Button>
					</p>
				</Jumbotron>
			</div>
		);
	}
}
