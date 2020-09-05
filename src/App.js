import React, { Component } from 'react';
import './App.scss';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar.component';
import SideDrawer from './components/SideDrawer/SideDrawer';
import './App.scss'

class App extends Component{

  constructor() {
    super();
    this.state = {
      sidedrawerOpen: true
    }
  }

  drawerToggleClickHandler = (event) => {
    event.preventDefault();
    this.setState((prevState)=> ({sidedrawerOpen: !prevState.sidedrawerOpen}))
  }

  render() {
    return (
      <div className="App">
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} show={this.state.sidedrawerOpen} />
        <div className="app-content">
          <SideDrawer show={this.state.sidedrawerOpen} />
          <Home show={this.state.sidedrawerOpen} />
        </div>
      </div>
    );
  }
}

export default App;
