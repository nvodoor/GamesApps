import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';

class Index extends Component {

    componentDidMount() {
        axios.get('http://localhost:8080/ping')
        .then(res => {
            console.log(res.data);
        })
    }

    render () {
        return (
            <div>
                <p className="para">This is the home page for the Games App. Come play!</p>
            </div>
        )
    }
}

export default Index;