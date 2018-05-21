import React, { Component } from 'react';
import '../../App.css';
import BattleBoard from './BattleBoard.js';
import './Battleship.css';
import axios from 'axios';

class Battleship extends Component {

    state = {
        playerLocs: [],
        computerLocs: [],
        turn: '',
        moves: 0,
        picks: [[],[],[]],
        winner: ''
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
    }

    componentDidUpdate () {
        if (this.state.winner === '') {
            this.renderButton();
        } else {
            axios.post('http://localhost:8080/post/battleship', {
                winner: this.state.winner
            })
            .then(res => {
                console.log(res);
            })
        }
    }

    handleClick = (e) => {
        let value = parseInt(e.target.id)
        if (this.state.playerLocs.includes(parseInt(e.target.id))) {
            e.target.innerHTML = "*";
            e.target.style = "color: blue; font-size: 30px"
            this.state.picks[0].push('p1')
        }
        if (this.state.computerLocs.includes(parseInt(e.target.id))) {
            e.target.innerHTML = "*";
            e.target.style = "color: red; font-size: 30px"
            this.state.picks[1].push('c1')
        }
        if (!this.state.playerLocs.includes(parseInt(e.target.id)) && !this.state.computerLocs.includes(parseInt(e.target.id))) {
            e.target.innerHTML = "X"
            e.target.style = "color: black"
            this.state.picks[2].push('X')
        }
        if (this.state.picks[0].length === 3) {
            this.setState({
                winner: 'Player'
            })
        }
        if (this.state.picks[1].length === 3) {
            this.setState({
                winner: 'Computer'
            })
        }
        if (this.state.turn === 'player' || this.state.turn === '') {
            this.setState({
                turn: 'computer'
            })
        } else {
            this.setState({
                turn: 'player'
            })
        }
    }
    
    displayPlayer = () => {
        let show = document.querySelector('.paraplus');
        show.style.display = "inline-block";
        let unshow = document.querySelector('#buttonplay');
        unshow.style.display = "none";

    }

    displayComputer = () => {
        let see = document.querySelector('.paraplus')
        see.style.display = "inline-block";
        let unsee= document.querySelector('#computerplay');
        unsee.style.display = "none";
    }

    renderButton = () => {
        document.querySelector('.paraplus').style.display = 'none';
        document.querySelector('button').style.display = 'inline-block';
    }

    render () {
        let turns = (
            <div className="startbox">
                <p className="para">Shall we begin? Player1...</p>
            </div>
        )

        if (this.state.turn === 'player') {
            let listPlayer = this.state.playerLocs.map((number) =>
                <li>{number}</li>
            );
            turns = (
                <div className="turnbox">
                    <p className="para">This turn is for the player.</p>
                    <button type="button" id="buttonplay" onClick={this.displayPlayer}>Display</button>
                    <ul className="paraplus" >{listPlayer}</ul>
                </div>
            )
        } 
        if (this.state.turn === 'computer') {
            let listComputer = this.state.computerLocs.map((number) =>
                <li>{number}</li>
            );
            turns = (
                <div className="turnbox">
                    <p className="para">This turn is for the computer.</p>
                    <button type="button" id="computerplay" onClick={this.displayComputer}>Display</button>
                    <ul className="paraplus">
                        {listComputer}
                    </ul>
                </div>
            )
        }
        if (this.state.winner !== '') {
            axios.post('https')
            return (
                <div>
                    <p className="para">The winner is: {this.state.winner}</p>
                </div>
            )
        }
        return (
            <div>
                <p className="para"> Welcome to Battleship.</p>
                <BattleBoard clicked={this.handleClick}/>
                {turns}
            </div>
        )
    }
}


export default Battleship;