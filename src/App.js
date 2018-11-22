import React, { Component } from 'react';
import './App.css';
// import ReactDOM from 'react-dom';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      authorName : {
        firstName : "Mohit",
        lastName : "Sharma"
      },
      authorURL : "https://placekitten.com/g/64/64",
      date : new Date().toLocaleTimeString(),
      comment : "I hope you are enjoying" 
    };
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date().toLocaleTimeString()
    });
  }

  render() {
    return (
      <div>
        <div className="date">{this.state.date}</div>
        <div className="authorName">{this.state.authorName.firstName + " " + this.state.authorName.lastName}</div>
        <img className="authorURL" src = {this.state.authorURL} alt={this.state.authorName} />
        <div className="authorComment">{this.state.comment}</div>
      </div>
    );
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Clock />
        </header>
      </div>
    );
  }
}

export default App;
