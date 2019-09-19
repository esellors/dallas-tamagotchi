import React from 'react';
import './Dashboard.scss';

export default function Dashboard (props) {

  const {hungerLevel, lovedLevel, tirednessLevel} = props;

  return (
    <section id='Dashboard' className='views'>
      <div id='progress-pane'>
        <span id='hunger-progress' className='progress-indicators'>
          <h2>Hunger Level</h2>
          <progress
            value={hungerLevel.toString()}
            max='100'
          />
        </span>

        <span id='loved-progress' className='progress-indicators'>
          <h2>Loved Level</h2>
          <progress
            value={lovedLevel.toString()}
            max='100'
          />
        </span>

        <span id='tiredness-progress' className='progress-indicators'>
          <h2>Tiredness Level</h2>
          <progress
            value={tirednessLevel.toString()}
            max='100'
          />
        </span>
      </div>
    </section>
  );

}