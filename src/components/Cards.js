import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
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
}

export default Cards;
