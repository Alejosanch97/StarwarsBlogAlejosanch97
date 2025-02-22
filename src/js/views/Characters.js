import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	const { people } = store;

	return (
		<div className="container-fluid mb-5">
			<div className="row">
				<div className="card-slider inicio">
					<h2 className="mainTitle">CHARACTERS</h2>
					<div className="overflow-auto">
						<div className="card-container people">
							{people.map((person, index) => (
								<div className="card carta" key={index}>
										<img
											src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} /* Dynamic image source */
											className="card-img-top"
											alt="Character"
										/>
										<div className="card-body">
											<h5 className="card-title">Name: {person.result.properties.name}</h5>
											<p className="card-text">Gender: {person.result.properties.gender}</p>
											<p className="card-text">Birth_year: {person.result.properties.birth_year}</p>
											<p className="card-text">Mass: {person.result.properties.mass}</p>
										</div>
										<div className="buttons d-flex justify-content-between">
										<NavLink
											key={person.result._id}
											to={`/singleDetail/${person.result._id}`}
											className="btn btn-primary"
										>
											Learn More!
										</NavLink>
											<button
												onClick={() => actions.modFavorites(person)}
												className={`btn btn-warning ${store.favorites.includes(person) ? 'active' : ''}`}
											>
												<i className="fas fa-heart"></i>
											</button>
										</div>
								</div>
							))}
						</div>
						<div class="text-center">
							<Link to="/">
								<button class="btn btn-danger">Back home</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
};

export default Characters;