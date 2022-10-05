//import ParseOptions from 'eleventy-plugin-toc/src/ParseOptions';
import React from 'react';
import { Cairns } from '../data';
import Card from './Card';
import styles from './styles/cards.module.css'

export default function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={styles.container}>
      {
        cities && cities.map(el => ( 
          <Card
            key={el.id} // la consola necesita diferenciarlos
            max={el.main.temp_max}
            min={el.main.temp_min}
            img={el.weather[0].icon}
            name={el.name}
            onClose={() => alert(Cairns.name)}
          />
        ))
      }
    </div>
  )
};