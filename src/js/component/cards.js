import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

export const CardsDetail = props => {
	return props.cardInfo.map((info, index) => {
		return (
			<Card className="text-center" key={index}>
				<Card.Img variant="top" src={info.src} />
				<Card.Body>
					<Card.Title>{info.title}</Card.Title>
					<Card.Text>{info.text}</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		);
	});
};

CardsDetail.propTypes = {
	cardInfo: PropTypes.array
};

class Cards extends Component {
	render() {
		return (
			<CardDeck>
				<CardsDetail cardInfo={this.props.cardArray} />
			</CardDeck>
		);
	}
}

export default Cards;

Cards.propTypes = {
	cardArray: PropTypes.array
};
