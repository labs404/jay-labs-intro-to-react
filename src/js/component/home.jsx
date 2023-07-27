import React from "react";
import Card from "./card";
import SpecialButton from "./button";
import Welcome from "./welcome";

function formatName(user) {
	return user.firstName + " " + user.lastName;
}

let user1 = {
	firstName: "Harper",
	lastName: "Perez",
	homePlanet: "Earth",
	species: "Human"

};

const element = (
	<>
		Hello, {formatName(user1)}. You are from {user1.homePlanet} <br />
		and you belong to the order of {user1.species}s
	</>
);

let myFirstName = "Rick";

const Home = () => {
	return(
			<div className="container text-center">
				<div className="row">
					<div className="col m-5 text-center">
						{element}
					</div>
				</div>
				<div className="row align-items-start">
					<div className="col-2">
					</div>
					<div className="col-8 d-flex text-center">
						<Card />
						<Card />
						<Card />
					</div>
					<div className="col-2">
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<SpecialButton />
					</div>
				</div>
				<div className="row m-5">
					<div className="col-12">
						{Welcome(user1)}
					</div>
				</div>
				<div className="row m-5">
					<div className="col-12">
						{Welcome(user1)}
						<Welcome  firstName={myFirstName} lastName={user1.lastName} />
					</div>
				</div>
			</div>			
	);
};

export default Home;

