import React from "react";
//import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export class TopNavegationBar extends React.Component {
	render() {
		return (
			<div>
				<Navbar className="navbar-dark bg-dark">
					<Navbar.Brand className="" href="#home">
						Start Bootstrap
					</Navbar.Brand>
					<Nav className="ml-auto" activeKey="/home">
						<Nav.Item>
							<Nav.Link href="#">Home</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="#">About</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="#">Services</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="#">Contact</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar>
			</div>
		);
	}
}
