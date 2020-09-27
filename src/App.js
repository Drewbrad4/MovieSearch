import React, { Component } from 'react';
import './App.css';
import MovieSearch from './Components/MovieSearch'

export default class App extends Component {
  render(){
    return (
      <div className="container">
        <h1 className="title">Movie Search</h1>
        <MovieSearch />
      </div>
    );
  }
}


