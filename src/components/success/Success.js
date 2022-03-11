import React from "react";
import './Success.css';

export const Success = (props) => {

    function next() {
        props.history.push('/products')
    }

    return (
        <>
            <div className='success'>
                <div className='success__message'>Féliciation pour votre achat !</div>
                <button onClick={next} className='success__next'>Continuer</button>
            </div>
        </>
    );
}

export default Success;