import React from 'react';
import {Link, Route} from 'wouter';
import Home from '../../pages/Home/Home';
import './Header.css'


import giffy from '../../img/giffy.svg';

export default function Header() {
   return (
        <header className="App-header">
            <Link to='/' className="App-header__link">
                <img className="App-header__img" src={giffy} alt="Giffy" />
                <h1 className="App-header__title">GIFFY</h1>
            </Link>
            <Route path="/" component={Home} />
        </header>
   )
}