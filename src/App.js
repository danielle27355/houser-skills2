import React, { Component } from 'react';
import {Link, HashRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import routes from "./routes"
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      readHouses: []
    }
  }

  componentDidMount(){
    this.getAllHouses()
  }

  getAllHouses = () => {
    axios.get("/api/houses").then(res => {
      console.log(res.data)
      this.setState({
        readHouses: res.data
      })
    })
  }

  postHouse = (theName, theAddress, theCity, theState, theZipcode) => {
    let theHouse = {
      theName,
      theAddress,
      theCity,
      theState,
      theZipcode
    }
    axios.post('api/houses', theHouse).then(res => {
      this.setState({
        readHouses: res.data
      })
      this.getAllHouses();
    })
  }




  render() {
    return (
      <HashRouter>
        <div className="App">
          Meow
          <Header />
          {routes}
        </div>
      </HashRouter>
        

    );
  }
}

export default App;
