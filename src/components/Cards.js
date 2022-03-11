import React, {useEffect, useState} from 'react';
import './Cards.css';
import CardItem from './CardItem';
import axios from "axios";

function Cards() {

    let [loading, setLoading] = useState(true);
    let [scooters, setScooters] = useState(null);

    useEffect(() => {
        fetchScooters();
    }, [])

    useEffect(() => {
        console.log(scooters);
    }, [scooters])

    if (loading === true) {
        return (
            <div id="overlay">
                <div className="loader"/>
            </div>
        )
    }
    return (
        <div className='cards'>
            <h1>Découvrez nos modèles les plus populaires</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    {scooters.map(scooter => (
                        <ul className='cards__items'>
                            <CardItem
                                id={scooter._id}
                                src='images/scooter1.png'
                                name={scooter.name}
                                color={scooter.color}
                                colorSaddle={scooter.saddle_color}
                                price={scooter.price}
                            />
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );

    function fetchScooters() {
        axios
            .get("https://brum-ar-api.herokuapp.com/scooter/")
            .then(response => setScooters(response.data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }
}

export default Cards;
