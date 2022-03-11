import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
import {Link} from "react-router-dom";


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted/>
            <h1>Découvrez Brumaire.</h1>
            <p className='text'>Deux batteries portables, un moteur électrique puissant, une clé numérique partagée</p>
            <p className='text'>
                et une application connectée </p><p className='text'> pour une expérience de conduite encore plus
            agréable.</p>
            <div className='hero-btns'>
                {/*<Button*/}
                {/*    className='btns'*/}
                {/*    buttonStyle='btn--primary'*/}
                {/*    buttonSize='btn--large'*/}
                {/*    onClick={() => window.location.href("https://github.com/Brum-AR/Brum-AR/pull/18")}*/}
                {/*>*/}
                {/*</Button>*/}
                <Link class='btns btn--primary btn--large' to={{ pathname: "ARProject://" }} target="_blank">
                    Essayez AR <i className='far fa-play-circle'/>
                </Link>

            </div>
        </div>
    );
}

export default HeroSection;
