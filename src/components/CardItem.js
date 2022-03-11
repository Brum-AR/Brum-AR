import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {

  function getImg() {
    switch (props.color.toLowerCase()) {
      case 'beige': return 'images/scooter1.png';
      case 'bleu': return 'images/scooter2.png';
      case 'vert': return 'images/scooter3.png';
      case 'gris': return 'images/scooter4.png';
    }
  }

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={'/details/' + props.id}>
          <figure className='cards__item__pic-wrap' data-category={props.color + ' / ' + props.colorSaddle}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={getImg()}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.name}</h5>
            <h5 className='cards__item__text'>{props.price}€</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
