import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import NameComponent from './NameComponent';
import FavoriteLanguage from './FavoriteLanguage';

export default class App extends React.Component {
  render() {
    const people = [
      {id: 1,
      name: 'Ammar',
      age: 25,
      favoriteLanguage: "Italian"
    },
      {id: 2,
        name: 'Hakan',
      age: 25},
      {id: 3,
        name: 'Mujtaba',
      age: 25},
      {id: 4,
        name: 'Osama',
      age: 25}
    ]

    function namesAsComponents(people) {
      return people.map(person => {
      return (
      <div>
          <NameComponent key={person.id} name={person.name} age={person.age}/>
          <FavoriteLanguage key={person.id} favoriteLanguage={person.favoriteLanguage} />
        </div>
      )
    })
  }

    // function favesAsComponents(people) {
    //   return people.map(person => )
    // }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {namesAsComponents(people)}
         
          <p>
            Re:Coded Istanbul 2019
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

// export default App;
