import React from 'react';

export default function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <div>
      <input type='text' placeholder='Ciudad'></input>
      <button onClick={() => onSearch()}>Agregar</button>
    </div>
  )
};