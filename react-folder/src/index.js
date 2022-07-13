import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const nums = [1, 2, 3, 4, 5];
const squared = nums.map(function (item) {
  return item * item;
})
console.log(squared);

const names = ["alice", "bob", "charlie", "danielle"]
const uppercaseNames = names.map((item) => {
  var char = item[0].toUpperCase() + item.slice(1);
  return char;

})
console.log(uppercaseNames);

const pokemon = ['Bulbasaur', 'Charmander', 'Squirtle']
const newPokemon = pokemon.map((mon) => {
  return `<p>${mon}<p>`
})
console.log(newPokemon);