//import ParseOptions from 'eleventy-plugin-toc/src/ParseOptions';
import React from 'react';
import { Cairns } from '../data';
import Card from './Card';

export default function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
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






/*
export class Cards extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.cities && this.props.cities.map(el => ( 
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
  }
} 
*/