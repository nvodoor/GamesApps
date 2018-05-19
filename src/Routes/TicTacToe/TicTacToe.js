import React, { Component } from 'react';
import Board from './Board.js';
import './TicTacToe.css';

class TicTacToe extends Component {

    state = {
        turn: '1',
        mark: 'X',
        boardMapX: [],
        boardMapO: [],
        victory: false,
        victor: 0
    }

    checkBoardMap = () => {
        let check = false;
        for (var i = 0; i < this.state.boardMapX.length; i++) {
            if (this.state.boardMapX[i] === 1) {
                if (this.state.boardMapX.includes(2) && this.state.boardMapX.includes(3)) {
                    check = true;
                    break
                }
            }
            if (this.state.boardMapX[i] === 1) {
                if (this.state.boardMapX.includes(5) && this.state.boardMapX.includes(9)) {
                    check = true;
                    break
                }
            }
            if (this.state.boardMapX[i] === 3) {
                if (this.state.boardMapX.includes(5) && this.state.boardMapX.includes(7)) {
                    check = true;
                    break
                }
            }
            if (this.state.boardMapX[i] === 4) {
                if (this.state.boardMapX.includes(5) && this.state.boardMapX.includes(6)) {
                    check = true;
                    break
                }
            }
            if (this.state.boardMapX[i] === 7) {
                if (this.state.boardMapX.includes(8) && this.state.boardMapX.includes(9)) {
                    check = true;
                    break
                }
            }
        }
        for (var j = 0; j < this.state.boardMapO.length; j++) {
            if (this.state.boardMapO[j] === 1) {
                if (this.state.boardMapO.includes(2) && this.state.boardMapO.includes(3)) {
                    check = true;
                    break
                }
            }
            if (this.state.boardMapO[j] === 1) {
                if (this.state.boardMapO.includes(5) && this.state.boardMapO.includes(9)) {
                    check = true;
                    break
                }
            }
            if (this.state.boardMapO[j] === 3) {
                if (this.state.boardMapO.includes(5) && this.state.boardMapO.includes(7)) {
                    check = true;
                    break
                }
            }
            if (this.state.boardMapO[j] === 4) {
                if (this.state.boardMapO.includes(5) && this.state.boardMapO.includes(6)) {
                    check = true;
                    break
                }
            }
            if (this.state.boardMapO[j] === 7) {
                if (this.state.boardMapO.includes(8) && this.state.boardMapO.includes(9)) {
                    check = true;
                    break
                }
            }
        }
        if (check === true) {
            this.setState({
                victory: true,
                victor: this.state.turn
            })
        }
    }

    makeChoice = (e) => {
        // console.log(e.target)
        // e.target.innerHTML = 'O';
        // console.log(e.target.id)
        if (this.state.turn === '1') {
            e.target.innerHTML = this.state.mark;
            this.state.boardMapX.push(parseInt(e.target.id))
            this.setState({
                turn: '2',
                mark: 'O'
            })
        } else {
            e.target.innerHTML = this.state.mark;
            this.state.boardMapO.push(parseInt(e.target.id))
            this.setState({
                turn: '1',
                mark: 'X'
            })
        }
        this.checkBoardMap();
    }

    render () {
        let tic = (
            <div>
                <p className='paraText'> This is where we play Tic Tac Toe.</p>
                <Board clicked={this.makeChoice}  />
                <p className='paraText'> Click on the Board squares to make your choice depending on whose turn it is.</p>
                <p className='paraText'> Right now it is Player {this.state.turn}'s choice.</p>
            </div>
        )
        if (this.state.victory === true) {
            tic = (
                <div>
                    <p className='paraText'>Congrats! The game was complete. There is a victory! Player#{this.state.victor} was victorious!</p>
                </div>
            )
        } 
        return (
        <div>
            {tic}
        </div>
        )
    }
}  


export default TicTacToe;