import React, { Component } from 'react';
import '../../App.css';
import BattleBoard from './BattleBoard.js';

class Battleship extends Component {

    state = {
        playerLocs: [],
        computerLocs: [],
        turn: 'player',
        moves: 0,
        picks: []
    }

    componentDidMount () {
        while (this.state.playerLocs.length < 3) {
            let num = Math.round(Math.random()*20)
            if (this.state.playerLocs.includes(num)) {
                console.log('Reroll')
            } else {
                this.state.playerLocs.push(num)
            }
        }
        while (this.state.computerLocs.length < 3) {
            let num = Math.round(Math.random() * 20)
            if (this.state.computerLocs.includes(num) || this.state.playerLocs.includes(num)) {
                console.log('Reroll')
            } else {
                this.state.computerLocs.push(num)
            }
        }
        console.log(this.state.playerLocs)
        console.log(this.state.computerLocs)
    }

    handleClick = (e) => {
        let value = parseInt(e.target.id)
        if (this.state.playerLocs.includes(parseInt(e.target.id))) {
            e.target.innerHTML = "*";
            e.target.style = "color: blue; font-size: 30px"
        }
        if (this.state.computerLocs.includes(parseInt(e.target.id))) {
            e.target.innerHTML = "*";
            e.target.style = "color: red; font-size: 30px"
        }
        if (!this.state.playerLocs.includes(parseInt(e.target.id)) && !this.state.computerLocs.includes(parseInt(e.target.id))) {
            e.target.innerHTML = "X"
            e.target.style = "color: black"
        }
    }

    render () {
        return (
            <div>
                <p className="para"> Welcome to Battleship.</p>
                <BattleBoard clicked={this.handleClick}/>
            </div>
        )
    }
}


export default Battleship;