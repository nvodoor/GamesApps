import React from 'react';
import './nav.css';
import { Route, BrowserRouter, NavLink, Switch, Redirect } from 'react-router-dom';

const nav = () => (
    <div className="navbar">
        <ul className="Menu">
            <li className="Piece"><NavLink to='index'>Home</NavLink></li>
            <li className="Piece"><NavLink to='rps'>RPS</NavLink></li>
            <li className="Piece"><NavLink to='tictactoe'>TicTacToe</NavLink></li>
            <li className="Piece"><NavLink to='battleship'>Battleship</NavLink></li>
            <li className="Piece"><NavLink to='scorelist'>Scorelist</NavLink></li>
        </ul>
    </div>
);

export default nav;