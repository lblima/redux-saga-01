import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../actions';
import logo from "../logo.svg";

export class App extends Component {

  renderDogImg(dog) {
    let imgTag = '';

    if (dog)
      imgTag = <img src={dog} />
    else
      imgTag = <div>No Image</div>

    return imgTag;
  }

  render() {
    const { fetching, dog, error, requestRandomDog, requestAfricanDog } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          { this.renderDogImg(dog) }
          <h1 className="App-title">Welcome to Dog Saga</h1>
        </header>

        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={requestRandomDog}>Request a Dog</button>
        )}

         {fetching ? (
          <button disabled>Fetching African Dog...</button>
        ) : (
          <button onClick={requestAfricanDog}>Request an African Dog</button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}

      </div>
    );
  }
}

const mapStateToProps = ( { dogReducer : { fetching, dog, error } } ) => {
  return {
    fetching,
    dog,
    error
  };
};

export default connect(mapStateToProps, actions)(App);