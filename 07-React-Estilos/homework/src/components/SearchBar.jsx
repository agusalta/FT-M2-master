import React from 'react';
import styles from './styles/searchBar.module.css'

export default function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <div className={styles.inputDiv}>
      <input className={styles.input}  type='text' placeholder='Ciudad'></input>
      <button className={styles.btn} onClick={() => onSearch()}>Agregar</button>
    </div>
  )
};