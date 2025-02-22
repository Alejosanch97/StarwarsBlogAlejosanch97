import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

const initialState = {
    properties: {
        height: "",
        mass: "",
        hair_color: "",
        skin_color: "",
        eye_color: "",
        birth_year: "",
        gender: "",
        created: "",
        edited: "",
        name: "",
        homeworld: "",
        _uid: ""
    
    },
    _id: "",
    uid:""
    
}


export const SingleDetail = () => {
    const { store } = useContext(Context);
    const { people } = store;
    const { _id } = useParams();
    const [character, setCharacter] = useState(initialState);

    useEffect(() => {
    
        const fetchPerson = async () => {
            const foundPerson = people.find(newPerson => newPerson.result._id === _id);
            if (foundPerson) {
                setCharacter(foundPerson.result);
            }
        }
        fetchPerson();
    }, [_id, people]);


    return (
        <>
           <div className="container mt-5">
            {character.properties.name && (
                <div className="row justify-content-center">
                <div className="col-md-8 shadow p-3 mb-5 bg-dark text-white rounded card-style single">
                    <div className="row">
                    {/* Image section */}
                    <div className="col-md-4 mb-3 text-center">
                        <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                        className="img-fluid rounded character-image"
                        alt="character"
                        />
                    </div>

                    {/* Character information section */}
                    <div className="col-md-8 character-info">
                        <div className="card-body">
                        <h3 className="card-title text-center mt-3">{character.properties.name}</h3>
                        <p className="card-text">
                            "Star Wars es una saga épica de ciencia ficción que transcurre en una galaxia muy, muy lejana, donde coexisten humanos y diversas razas alienígenas. La historia gira en torno a una antigua guerra entre los Jedi, guerreros que utilizan la Fuerza para el bien, y los Sith, señores oscuros que se sirven del Lado Oscuro de la Fuerza."
                        </p>

                        {/* Character details */}
                        <div className="row">
                            <div className="col-6">
                            <h4>Physical Properties:</h4>
                            <ul className="list-group">
                                <li className="list-group-item">
                                <span className="fw-bold">Color de Pelo:</span> {character.properties.hair_color}
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Color de Piel:</span> {character.properties.skin_color}
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Color de Ojos:</span> {character.properties.eye_color}
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Altura:</span> {character.properties.height} cm
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Masa:</span> {character.properties.mass} kg
                                </li>
                            </ul>
                            </div>
                            <div className="col-6">
                            <h4>Identifying Features:</h4>
                            <ul className="list-group">
                                <li className="list-group-item">
                                <span className="fw-bold">Año de Nacimiento:</span> {character.properties.birth_year}
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Género:</span> {character.properties.gender}
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Creado:</span> {character.properties.created}
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Editado:</span> {character.properties.edited}
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="text-center back">
                    <Link to="/Characters">
                        <button className="btn btn-danger">Back</button>
                    </Link>
                </div>
                </div>
            )}
            </div>
        </>
    )
};

export default SingleDetail;