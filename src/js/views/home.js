import React from "react";
import { render } from "react-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Carousel, CarouselPeople, CarouselVehicle } from "../component/Carousel.jsx";

export const Home = () => {
	return (
	<div className="container">
		<h1 className="characters glow">Characters</h1>
			<Carousel routepath="people"/>
		<h1 className="Planets glow">Planets</h1>
			<Carousel routepath="planets"/>
		<h1 className="vehicles glow>">Vehicles</h1>
			<Carousel routepath="vehicles"/>
	</div>
	
)
};
