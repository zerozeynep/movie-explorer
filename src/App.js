import React from 'react';
import './App.css';
import movies from './data';

export default class App extends React.Component {
  render() {
    console.log(movies.results);
    return (
      <div className="App">
        <header className="App-header">

        </header>
      </div>
    );
  }
}

// export default App;
