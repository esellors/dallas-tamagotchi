import React from 'react';
import './Character.scss';
import dogFace from '../../assets/dog_outline.gif';
import happyFace from '../../assets/happy_face.jpg';
import worriedFace from '../../assets/worried_face.jpg';
import angryFace from '../../assets/angry_face.jpg';
import runningDog from '../../assets/dog_running_away.jpg';

export default function Character(props) {
  const {hungerLevel, lovedLevel, tirednessLevel} = props;

  function determineFace() {
    if (hungerLevel > 100 || lovedLevel < 0 || tirednessLevel > 100) {
      return runningDog;
    } else if (hungerLevel >= 60 || lovedLevel <= 30 || tirednessLevel >= 60) {
      return angryFace;
    } else if (hungerLevel >= 30 || lovedLevel <= 60 || tirednessLevel >= 30) {
      return worriedFace;
    } else {
      return happyFace;
    }
  }

  return (
    <section id='Character' className='views'>
      <h2>Keep Dallas from running away!</h2>
      <img 
        src={dogFace} 
        id='dogFace'
        alt='dogFace' 
      />

      <img 
        src={determineFace()} 
        id='dogFaceExpression'
        alt='dogFaceExpression'
      />
    </section>
  );

}