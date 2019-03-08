import React, { Component } from 'react';
import MemoryCard from '../MemoryCard';
import images from "../../images.json";
import "./MainGameContainer.css";

class MainGameContainer extends Component {
	state = {
		images,
		score: 0,
		topScore: 0
	};
	
	handleClick = (id, clicked) => {

		const imageOrder = this.state.images;

		//if image has already been clicked.  reorder image list and set clicked property to false
		//reset score
		if (clicked) {
			imageOrder.forEach((image, index) => {
				imageOrder[index].clicked = false;
			});
			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "You Guessed Incorrectly!",

				score: 0
			})
		}
		//image has not been clicked so update score and image list:
		//search through image list and set image clicked property to true
		else {
			imageOrder.forEach((image, index) => {
				if (id === image.id) {
					imageOrder[index].clicked = true;
				}
			});

			//grab current score and top score from state, add 1 to score
			const {topScore, score } = this.state;
			const newScore = score + 1;
			const newTopScore = newScore > topScore ? newScore : topScore;

			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "You Guessed Correctly!",
				score: newScore,
				topScore: newTopScore,
			})
		}
	};

	render() {
		return (
			<div className="container-fluid mainCardContainer">
			<div className="gameMessage text-center">
						<p>{this.state.message}</p>
					</div>
					<div className="gameScores text-center">
						<p>Score: {this.state.score} | Top Score: {this.state.topScore}</p>
					</div>
				<div className="container">
					
					<div className="row">
					{this.state.images.map(image => (
						<MemoryCard
							key={image.id}
							id={image.id}
							name={image.name}
							clicked={image.clicked}
							image={image.image}
							handleClick={this.handleClick}
							/>
					))}
					</div>
					
				</div>
			</div>
		);
	}
};

export default MainGameContainer;