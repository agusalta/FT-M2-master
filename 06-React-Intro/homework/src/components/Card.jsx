import React from 'react';

export default function Card({ max, min, name, img, onClose }) { //* destructuring
  // acá va tu código
  return (
    <div>
      <button onClick={onClose}>X</button>
      <h4>{name}</h4>
      <div>
        <p>Min</p>
        <p>{min}</p>
        <p>Max</p>
        <p>{max}</p>
      </div>
      <img alt='img' src={`http://openweathermap.org/img/wn/${img}@2x.png`}/>
    </div>
  ) 
};








/*
 export class CardClass extends React.Component {
  render(){
   // let {min, max, name, img, onClose} = this.props // destructuring  
    return (
      <div>
        <button onClick={this.props.onClose}>X</button>
        <h4>{this.props.name}</h4>
        <div>
          <p>Min</p>
          <p>{this.props.min}</p>
          <p>Max</p>
          <p>{this.props.max}</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${this.props.img}@2x.png`}/>
      </div>
    ) 
  }
} 

export default card || export class (en la clase) || export default class en caso de que sea unicamente una.
*/

