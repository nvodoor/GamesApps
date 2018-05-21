import React,{ Component }  from 'react';
import axios from 'axios';

class Scorelist extends Component {
    state = {
        RPS: [],
        Battleship: [],
        TicTacToe: []
    }

    componentDidMount() {

        axios.all(
            [
                axios.get('http://localhost:8080/get/battleship'),
                axios.get('http://localhost:8080/get/RPS'),
                axios.get('http://localhost:8080/get/tictactoe')
            ]
        ).then(axios.spread( (bship,rps,ttt) => {
            console.log(bship)
            console.log(rps)
            console.log(ttt)
            this.setState({
                RPS: rps.data,
                Battleship: bship.data,
                TicTacToe: ttt.data
            })
            console.log(this.state.Battleship.length)
            console.log(this.state.RPS.length)
            console.log(this.state.TicTacToe.length);
        } ))
            

    }
    
    render () {
        const ship = this.state.Battleship.map((ship) => 
            <li key={ship.id}>{ship.winner}</li>
        )
        const rockps = this.state.RPS.map((rps) =>
            <li key={rps.id}>Total to win: {rps.win},Player: {rps.pscore}, Computer: {rps.cscore}</li>
        )
        const toe = this.state.TicTacToe.map((tac) =>
            <li key={tac.id}>{tac.victor}</li>
        )
        return (
            <div>
                <p className="para">This is where we will render scores.</p>
                <h1>Battleship Results</h1>
                <ul>{ship}</ul>
                <h1>Rock Paper Scissors Scores</h1>
                <ul>{rockps}</ul>
                <h1>Tic Tac Toe Results</h1>
                <ul>{toe}</ul>
            </div>
        )
    }
}

export default Scorelist;