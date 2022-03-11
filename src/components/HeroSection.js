import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import OpenApp from "react-open-app";


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Découvrez Brumaire.</h1>
      <p className='text'>Deux batteries portables, un moteur électrique puissant,  une clé numérique partagée</p><p className='text'>
        et une application connectée </p><p className='text'> pour une expérience de conduite encore plus agréable.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          <OpenApp
              ios="ARProject://"
          >
              Essayez AR <i className='far fa-play-circle' />
          </OpenApp>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
