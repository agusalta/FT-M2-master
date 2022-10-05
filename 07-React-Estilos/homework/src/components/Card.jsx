import React from 'react';
import styles from './styles/card.module.css';

export default function Card({ max, min, name, img, onClose }) { //* destructuring
  // acá va tu código
  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={onClose}>X</button>
      <h4>{name}</h4>
      <div className={styles.infoContainer}>
        <p>Min</p>
        <p>{min}</p>
        <p>Max</p>
        <p>{max}</p>
      </div>
      <img className={styles.img} alt='img' src={`http://openweathermap.org/img/wn/${img}@2x.png`}/>
    </div>
  ) 
};

