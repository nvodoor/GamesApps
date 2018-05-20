import React, { Component } from 'react';
import Nav from './UI/nav.js';
import Header from './UI/Header.js';
import './App.css';
import RPS from './Routes/RPS/RPS';
import TicTacToe from './Routes/TicTacToe/TicTacToe';
import Scorelist from './Routes/Scorelist/Scorelist';
import Battleship from './Routes/Battleship/Battleship';
import Ind from './Routes/Index/Index';

import { Route, BrowserRouter,Switch, Redirect } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
            <Header/>
            <Nav/>
          <Switch>
            <Route path="/index" component={Ind} />
            <Route path="/rps" component={RPS} />
            <Route path="/tictactoe" component={TicTacToe} />
            <Route path="/battleship" component={Battleship} />
            <Route path="/scorelist" component={Scorelist} />
          </Switch>
          <Redirect from="*" to="/index"/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
