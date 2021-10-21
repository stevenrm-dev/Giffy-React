import React from 'react';

import './App.css';
import Header from './components/Header/Header.jsx';
import SearchResults from './pages/SearchResults/SearchResults.jsx';
import Detail from './pages/Detail/Detail.jsx'
import StaticContext from './context/StaticContext.jsx';
import {GifsContextProvider} from './context/GifsContext.jsx';

import {Route} from 'wouter';

function App() {
  return (
    <StaticContext.Provider value={{name:'hola', name2: true}}>
    <div className="App">
      <Header />
      <section className="App-content">
          <GifsContextProvider>
          <Route path="/search/:keyword" component={SearchResults} />
          <Route path="/gif/:id" component={Detail} />
          </GifsContextProvider>
      </section>
    </div>
    </StaticContext.Provider>
  );
}

export default App;
