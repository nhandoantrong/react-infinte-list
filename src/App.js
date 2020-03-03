import React from 'react';
import './App.css';
import InfiniteList from './InfiniteList';
import TextComponent from './TextComponent';


const randomText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis, felis eleifend feugiat dictum, ante risus feugiat mi, non finibus sapien urna vel dui. Praesent vestibulum, dolor at consectetur bibendum, enim nisl imperdiet lectus, eget lacinia libero diam eget risus. Mauris eu mauris sit amet tortor vestibulum varius. Morbi turpis libero, facilisis et mattis cursus, rhoncus pulvinar nisl. Quisque lobortis, urna et iaculis condimentum, magna mi vehicula diam, lacinia malesuada nulla nibh ut urna. Ut non aliquam massa, vel scelerisque turpis. Etiam in nulla sem. Donec quis malesuada quam, nec egestas ante. Ut mattis iaculis dignissim. Duis dapibus arcu elit, quis volutpat mauris laoreet et. Nulla sem elit, ultricies in molestie at, finibus sit amet arcu. Proin gravida dolor id diam rutrum ultricies quis eget enim. Etiam vestibulum pretium placerat. Nullam fermentum pulvinar sollicitudin.'


const data = new Array(1000).fill().map(() => ({
  key: `${Math.random()}-${Date.now(  )}`,
  value : randomText.slice(0, Math.floor(Math.random()*randomText.length))
}));

console.log(data)

function App() {
  return (
    <div style={{position: "relative", padding: '8px', height: '100vh', boxSizing: 'border-box'}}>
      <InfiniteList itemList = {data} ItemComponent = {TextComponent}/>
    </div>
  );
}

export default App;
