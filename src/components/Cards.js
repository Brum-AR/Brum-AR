import React, {useEffect} from 'react';
import './Cards.css';
import CardItem from './CardItem';
import axios from "axios";

function Cards() {
  // let loading = true;
  // let scooters = null;
  //
  // useEffect(() => {
  //   fetchScooters().then(r => scooters = null);
  // }, [])
  //
  // if (loading === null) {
  //   return <h2>Chargement des publications...</h2>;
  // }
  return (
    <div className='cards'>
      <h1>Découvrez nos modèles les plus populaires</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/scooter1.png'
              text='Model 1'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/scooter2.png'
              text='Model 2'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/scooter3.png'
              text='Model 3'
              label='?'
              path='/services'
            />
            <CardItem
              src='images/scooter4.png'
              text='Model 4'
              label='?'
              path='/products'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );

  // async function fetchScooters() {
  //   axios
  //       .get("https://brum-ar-api.herokuapp.com/scooter/")
  //       .then(response => console.log(response.data))
  //       .catch(error => console.log(error))
  //       .finally(() => loading = false)
  // }
}

export default Cards;
