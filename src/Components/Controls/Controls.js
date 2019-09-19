import React from 'react';
import './Controls.scss';
import store, {UPDATE_HUNGER_LEVEL, UPDATE_LOVED_LEVEL, UPDATE_TIREDNESS_LEVEL} from '../../redux/store';

export default function Controls(props) {
  const {hungerLevel, lovedLevel, tirednessLevel} = props;

  const decreaseHunger = () => {
    let newLevel = 0;

    if (hungerLevel <= 9) {
      newLevel = 0;
    } else {
      newLevel = hungerLevel - 10;
    }

    store.dispatch({
      type: UPDATE_HUNGER_LEVEL,
      payload: newLevel
    })
  }

  const increaseLove = () => {
    let newLevel = 0;

    if (lovedLevel >= 91) {
      newLevel = 100;
    } else {
      newLevel = lovedLevel + 10;
    }

    store.dispatch({
      type: UPDATE_LOVED_LEVEL,
      payload: newLevel
    })
  }

  const decreaseTiredness = () => {
    let newLevel = 0;

    if (tirednessLevel <= 9) {
      newLevel = 0;
    } else {
      newLevel = tirednessLevel - 10;
    }

    store.dispatch({
      type: UPDATE_TIREDNESS_LEVEL,
      payload: newLevel
    })
  }
 
  return (
    <section id='Controls' className='views'>
      <div 
        className='controls-divs'
        onClick={decreaseHunger}
      >
        <h1>GIVE FOOD</h1>
      </div>

      <div 
        className='controls-divs'
        onClick={increaseLove}
      >
        <h1>RUB BELLY</h1>
      </div>
      
      <div 
        className='controls-divs'
        onClick={decreaseTiredness}
      >
        <h1>SEND TO BED</h1>
      </div>
    </section>
  );
}