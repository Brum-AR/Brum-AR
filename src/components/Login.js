import React from 'react'
import CardItem from './CardItem'

import './Cards.css';


const Login = () => {
  return (
    <>
   {/* <div className='cards'>
      <h1></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/scooter1.png'
              text='Model 1'
             
              path='/'
            />
           
          </ul>
          
        </div>
      </div>
    </div> */}
  
      <div className="App">
        
        <div className="input-container">
          <input type="text" placeholder="Username"/>
          <i class="zmdi zmdi-account zmdi-hc-lg"></i>
        </div>
        
        <div className="input-container">
          <input type="password" placeholder="Password"/>
          <i class="zmdi zmdi-lock zmdi-hc-lg"></i>
        </div>
        
        <button type="submit">Log In</button>
      </div>
    
 


    </>

  )
}

export default Login