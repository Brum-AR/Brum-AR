import React from 'react';
import { Link } from 'react-router-dom';
import {getImg} from "./common/FileUtils";

function CardItem(props) {



  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={'/details/' + props.id}>
          <figure className='cards__item__pic-wrap' data-category={props.color + ' / ' + props.colorSaddle}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={getImg(props.color.toLowerCase())}
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
