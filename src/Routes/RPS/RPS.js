import React, { Component } from 'react';
import './RPS.css';
import axios from 'axios';

class RPS extends Component {
    state = {
        playerScore: 0,
        computerScore: 0,
        gameCount: 0,
        value: '',
        compChoices: ['rock','paper','scissors']
    }

    componentDidUpdate() {
        if (this.state.playerScore >= this.state.gameCount && this.state.gameCount > 0 && this.state.value !== 'done') {
            axios.post('http://localhost:8080/post/RPS', {
                pscore: this.state.playerScore,
                cscore: this.state.computerScore,
                win: this.state.gameCount
            })
                .then(res => {
                    console.log(res);
                })
            this.setState({
                value: 'done'
            })
        }
        if (this.state.computerScore >= this.state.gameCount && this.state.gameCount > 0 && this.state.value !== 'done') {
            axios.post('http://localhost:8080/post/RPS', {
                pscore: this.state.playerScore,
                cscore: this.state.computerScore,
                win: this.state.gameCount
            })
                .then(res => {
                    console.log(res);
                })
            this.setState({
                value: 'done'
            })
        }
    }

    newValue = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = () => {
        let value = parseInt(this.state.value)
        if (value > 0) {
            this.setState({
                gameCount: parseInt(this.state.value)
            })
        } else {
            alert("Set a proper value.")
        }
    }

    rockSubmit = () => {
        let player = "rock"
        let computer = this.state.compChoices[Math.round(Math.random()*2)]
        if (computer === "rock") {
            // do nothing
        }
        if (computer === "scissors") {
            const playScore = this.state.playerScore
            this.setState({
                playerScore: playScore+1
            })
        }
        if (computer === "paper") {
            const playScore = this.state.computerScore
            this.setState({
                computerScore: playScore + 1
            })
        }
    }

    paperSubmit = () => {
        let player = "paper"
        let computer = this.state.compChoices[Math.round(Math.random() * 2)]
        if (computer === "rock") {
            const playScore = this.state.playerScore
            this.setState({
                playerScore: playScore + 1
            })
        }
        if (computer === "scissors") {
            const playScore = this.state.computerScore
            this.setState({
                computerScore: playScore + 1
            })
        }
        if (computer === "paper") {
            // do nothing
        }
    }

    scissorSubmit = () => {
        let player = "paper"
        let computer = this.state.compChoices[Math.round(Math.random() * 2)]
        if (computer === "rock") {
            const playScore = this.state.computerScore
            this.setState({
                computerScore: playScore + 1
            })
        }
        if (computer === "scissors") {
            // do nothing
        }
        if (computer === "paper") {
            const playScore = this.state.playerScore
            this.setState({
                playerScore: playScore + 1
            })
        }
    }

    render () {

        let scores = (
            <div>
                <p className="para"> Here is where we will play Rock, Paper, Scissors. </p>
                <p className="para">Here is the player's amount of wins: {this.state.playerScore}</p>
                <p className="para">Here is the computer's amount of wins: {this.state.computerScore}</p>
                <p className="para">Here are the amount of games we will play this round: {this.state.gameCount}</p>
                <input className="tboard" type="text" value={this.state.value} onChange={this.newValue}/>
                <button onClick={this.handleSubmit}>Matches to play</button>
            </div>
        )

        if (this.state.gameCount > 0) {
            scores = (
                <div>
                    <p className="para">Here is the player's amount of wins: {this.state.playerScore}</p>
                    <p className="para">Here is the computer's amount of wins: {this.state.computerScore}</p>
                    <p className="para">Here are the amount of games we will play this round: {this.state.gameCount}</p>
                    <p className="para">Here are your options</p>
                    <button className="green" onClick={this.rockSubmit}>Rock</button>
                    <button className="red" onClick={this.paperSubmit}>Paper</button>
                    <button className="blue" onClick={this.scissorSubmit}>Scissor</button>
                </div>
            )
        }

        if (this.state.playerScore >= this.state.gameCount && this.state.gameCount > 0) {
            scores = (<div>
            <p className="para"> Congratulations the player won. </p>
            </div>
            )
        }

        if (this.state.computerScore >= this.state.gameCount && this.state.gameCount > 0) {
            scores = (<div>
                <p className="para"> Congratulations the computer won. </p>
            </div>
            )
        }

        return (
            <div>
                {scores}
            </div>
        )
    }
}

export default RPS;