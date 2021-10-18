import React from 'react';

import './App.css';
import Header from './components/Header/Header.jsx';
import SearchResults from './pages/SearchResults/SearchResults';

import {Route} from 'wouter';

function App() {

  return (
    <div className="App">
      <Header />
      <section className="App-content">
          <Route path="/search/:keyword" component={SearchResults} />
      </section>
    </div>
  );
}

export default App;
